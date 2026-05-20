import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { createAdminClient } from '@/lib/supabase'
import ServicesManager from '@/components/dashboard/services-manager'

export default async function ServicesPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (!session) redirect('/dashboard/login')

  // Allow super admin or Marketing group members only
  let allowed = session.isSuperAdmin
  if (!allowed) {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('users')
      .select('groups(name)')
      .eq('id', session.userId)
      .single()
    allowed = (data?.groups as { name: string } | null)?.name === 'Marketing'
  }

  if (!allowed) redirect('/dashboard')

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="font-heading text-[#383838] text-2xl lg:text-3xl mb-1">Services</h1>
        <p className="font-inter text-[#6b6b6b] text-sm">
          Manage service listings, prices, and content across the entire site.
        </p>
      </div>
      <ServicesManager />
    </div>
  )
}
