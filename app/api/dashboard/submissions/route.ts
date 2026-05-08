import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const formType = searchParams.get('form_type')
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
  const limit = 20
  const offset = (page - 1) * limit

  const supabase = createAdminClient()
  let query = supabase
    .from('submissions')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (formType && formType !== 'all') {
    query = query.eq('form_type', formType)
  }

  const { data, count, error } = await query

  if (error) {
    console.error('[/api/dashboard/submissions]', error)
    return NextResponse.json({ error: 'Failed to fetch submissions.' }, { status: 500 })
  }

  return NextResponse.json({ submissions: data, total: count, page, limit })
}
