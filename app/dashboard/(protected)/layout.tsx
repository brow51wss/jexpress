import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import { createAdminClient } from '@/lib/supabase'
import DashboardNav from '@/components/dashboard/nav'

export const metadata: Metadata = {
  title: 'Dashboard — JTTC',
  robots: 'noindex, nofollow',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (!session) redirect('/dashboard/login')

  // Check if user is in the Marketing group
  let isMarketing = false
  if (!session.isSuperAdmin) {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('users')
      .select('groups(name)')
      .eq('id', session.userId)
      .single()
    isMarketing = (data?.groups as { name: string } | null)?.name === 'Marketing'
  }

  return (
    <div className="min-h-screen bg-[#f9f4ef] flex">
      <DashboardNav
        isSuperAdmin={session.isSuperAdmin}
        isMarketing={isMarketing}
        email={session.email}
      />
      <main className="flex-1 min-w-0 p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}
