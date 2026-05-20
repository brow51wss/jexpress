import { cookies } from 'next/headers'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import SubmissionsTable from '@/components/dashboard/submissions-table'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-[#383838] text-2xl lg:text-3xl">
          Submissions
        </h1>
        <p className="font-inter text-[#6b6b6b] text-sm mt-1">
          All form submissions from the website
        </p>
      </div>
      <SubmissionsTable isSuperAdmin={session?.isSuperAdmin ?? false} />
    </div>
  )
}
