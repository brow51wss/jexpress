import type { Metadata } from 'next'
import DashboardLoginForm from '@/components/dashboard/login-form'

export const metadata: Metadata = {
  title: 'Dashboard Login — JTTC',
  robots: 'noindex, nofollow',
}

export default function DashboardLoginPage() {
  return (
    <div className="min-h-screen bg-[#383838] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Internal Access
          </span>
          <h1 className="text-white font-sans font-black text-3xl leading-tight">
            J Express <span className="text-[#f58c23]">Dashboard</span>
          </h1>
          <p className="text-white/50 font-inter text-sm mt-2">
            Enter your email to receive a login code
          </p>
        </div>
        <DashboardLoginForm />
      </div>
    </div>
  )
}
