import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'
import UserManagement from '@/components/dashboard/user-management'

export default async function UsersPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  const session = token ? await verifySessionToken(token) : null

  if (!session?.isSuperAdmin) redirect('/dashboard')

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-[#383838] text-2xl lg:text-3xl">
          User Management
        </h1>
        <p className="font-inter text-[#6b6b6b] text-sm mt-1">
          Manage dashboard users and groups
        </p>
      </div>
      <UserManagement />
    </div>
  )
}
