import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
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

// PUT — upsert content for a section
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!(await canManageServices(session))) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { id: serviceId } = await params
  let body: Record<string, unknown>
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const sectionKey = body.section_key
  if (sectionKey !== 'homepage' && sectionKey !== 'services_page') {
    return NextResponse.json({ error: 'Invalid section_key.' }, { status: 400 })
  }

  const description = typeof body.description === 'string' ? body.description.slice(0, 3000) : ''
  const tags = Array.isArray(body.tags)
    ? body.tags.filter((t) => typeof t === 'string').map((t) => String(t).slice(0, 100))
    : []

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('service_content')
    .upsert(
      { service_id: serviceId, section_key: sectionKey, description, tags, updated_at: new Date().toISOString() },
      { onConflict: 'service_id,section_key' }
    )
    .select()
    .single()

  if (error) {
    console.error('[service_content PUT]', error)
    return NextResponse.json({ error: 'Failed to save content.' }, { status: 500 })
  }

  revalidateTag('services')
  return NextResponse.json({ content: data })
}
