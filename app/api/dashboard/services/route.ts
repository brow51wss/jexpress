import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { cleanField, LIMITS } from '@/lib/form-utils'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'

async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return token ? verifySessionToken(token) : null
}

async function canManageServices(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session) return false
  if (session.isSuperAdmin) return true
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('users')
    .select('group_id, groups(name)')
    .eq('id', session.userId)
    .single()
  return (data?.groups as { name: string } | null)?.name === 'Marketing'
}

// GET all services (including inactive) for dashboard
export async function GET() {
  const session = await getSession()
  if (!(await canManageServices(session))) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('services')
    .select(`
      id, slug, name, price, price_label, icon, sort_order, is_active, created_at,
      service_content ( id, section_key, description, tags )
    `)
    .order('sort_order', { ascending: true })

  if (error) return NextResponse.json({ error: 'Failed to fetch services.' }, { status: 500 })
  return NextResponse.json({ services: data })
}

// POST create a new service
export async function POST(request: Request) {
  const session = await getSession()
  if (!(await canManageServices(session))) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = cleanField(body.name, LIMITS.short)
  if (!name) return NextResponse.json({ error: 'Service name is required.' }, { status: 400 })

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const icon = cleanField(body.icon, 50) || 'Bus'
  const priceLabel = body.price_label === 'from' ? 'from' : 'flat'
  const price = typeof body.price === 'number' && body.price > 0 ? body.price : null

  const supabase = createAdminClient()

  // Get current max sort_order
  const { data: maxRow } = await supabase
    .from('services')
    .select('sort_order')
    .order('sort_order', { ascending: false })
    .limit(1)
    .single()

  const sortOrder = (maxRow?.sort_order ?? 0) + 1

  const { data: service, error } = await supabase
    .from('services')
    .insert({ slug, name, price, price_label: priceLabel, icon, sort_order: sortOrder })
    .select()
    .single()

  if (error) {
    console.error('[services POST]', error)
    return NextResponse.json({ error: 'Failed to create service.' }, { status: 500 })
  }

  // Create blank content for both sections
  await supabase.from('service_content').insert([
    { service_id: service.id, section_key: 'homepage', description: '', tags: [] },
    { service_id: service.id, section_key: 'services_page', description: '', tags: [] },
  ])

  revalidateTag('services')
  return NextResponse.json({ service }, { status: 201 })
}
