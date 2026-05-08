import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { cleanField, LIMITS } from '@/lib/form-utils'
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
    .from('groups')
    .select('id, name, created_at')
    .order('name', { ascending: true })

  if (error) return NextResponse.json({ error: 'Failed to fetch groups.' }, { status: 500 })
  return NextResponse.json({ groups: data })
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

  const name = cleanField(body.name, LIMITS.short)
  if (!name) return NextResponse.json({ error: 'Group name is required.' }, { status: 400 })

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('groups')
    .insert({ name })
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'A group with this name already exists.' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create group.' }, { status: 500 })
  }

  return NextResponse.json({ group: data }, { status: 201 })
}

export async function DELETE(request: Request) {
  const session = await getSession()
  if (!session?.isSuperAdmin) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Group ID required.' }, { status: 400 })

  const supabase = createAdminClient()
  await supabase.from('groups').delete().eq('id', id)
  return NextResponse.json({ success: true })
}
