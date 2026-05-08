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

// PATCH — update service details
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!(await canManageServices(session))) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { id } = await params
  let body: Record<string, unknown>
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const supabase = createAdminClient()
  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() }

  if (typeof body.name === 'string') {
    const name = cleanField(body.name, LIMITS.short)
    if (!name) return NextResponse.json({ error: 'Service name cannot be empty.' }, { status: 400 })
    updates.name = name
  }
  if (typeof body.icon === 'string') updates.icon = cleanField(body.icon, 50) || 'Bus'
  if (body.price_label === 'flat' || body.price_label === 'from') updates.price_label = body.price_label
  if (body.price === null || body.price === '') {
    updates.price = null
  } else if (typeof body.price === 'number') {
    updates.price = body.price > 0 ? body.price : null
  }
  if (typeof body.is_active === 'boolean') updates.is_active = body.is_active
  if (typeof body.sort_order === 'number') updates.sort_order = body.sort_order

  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('[services PATCH]', error)
    return NextResponse.json({ error: 'Failed to update service.' }, { status: 500 })
  }

  revalidateTag('services')
  return NextResponse.json({ service: data })
}

// DELETE — hard delete (content cascades)
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!(await canManageServices(session))) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { id } = await params
  const supabase = createAdminClient()

  const { error } = await supabase.from('services').delete().eq('id', id)
  if (error) {
    console.error('[services DELETE]', error)
    return NextResponse.json({ error: 'Failed to delete service.' }, { status: 500 })
  }

  revalidateTag('services')
  return NextResponse.json({ success: true })
}
