import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { cleanField, isValidEmail, LIMITS } from '@/lib/form-utils'
import { cookies } from 'next/headers'

async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return token ? verifySessionToken(token) : null
}

export async function GET() {
  const session = await getSession()
  if (!session?.isSuperAdmin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('users')
    .select('id, email, is_super_admin, group_id, created_at, groups(name)')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: 'Failed to fetch users.' }, { status: 500 })
  return NextResponse.json({ users: data })
}

export async function POST(request: Request) {
  const session = await getSession()
  if (!session?.isSuperAdmin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const email   = cleanField(body.email,   LIMITS.email)
  const groupId = typeof body.groupId === 'string' ? body.groupId : null

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('users')
    .insert({ email, group_id: groupId || null })
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'This email is already registered.' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create user.' }, { status: 500 })
  }

  return NextResponse.json({ user: data }, { status: 201 })
}

export async function DELETE(request: Request) {
  const session = await getSession()
  if (!session?.isSuperAdmin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'User ID required.' }, { status: 400 })

  const supabase = createAdminClient()

  // Prevent deleting the super admin account
  const { data: user } = await supabase.from('users').select('is_super_admin').eq('id', id).single()
  if (user?.is_super_admin) {
    return NextResponse.json({ error: 'Cannot delete the super admin account.' }, { status: 403 })
  }

  await supabase.from('users').delete().eq('id', id)
  return NextResponse.json({ success: true })
}

export async function PATCH(request: Request) {
  const session = await getSession()
  if (!session?.isSuperAdmin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { id, groupId } = body
  if (typeof id !== 'string') return NextResponse.json({ error: 'User ID required.' }, { status: 400 })

  const supabase = createAdminClient()
  const { error } = await supabase
    .from('users')
    .update({ group_id: groupId ?? null })
    .eq('id', id)

  if (error) return NextResponse.json({ error: 'Failed to update user.' }, { status: 500 })
  return NextResponse.json({ success: true })
}
