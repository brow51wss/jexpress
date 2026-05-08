import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export const revalidate = 0

export async function GET() {
  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('services')
    .select(`
      id,
      slug,
      name,
      price,
      price_label,
      icon,
      sort_order,
      is_active,
      service_content (
        section_key,
        description,
        tags
      )
    `)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('[/api/services]', error)
    return NextResponse.json({ error: 'Failed to fetch services.' }, { status: 500 })
  }

  return NextResponse.json({ services: data }, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}
