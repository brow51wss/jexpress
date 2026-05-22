import type { Metadata } from 'next'
import DashboardLoginForm from '@/components/dashboard/login-form'

export const metadata: Metadata = {
  title: 'Dashboard Login — JTTC',
  robots: 'noindex, nofollow',
}

export default function DashboardLoginPage() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="eyebrow-dash text-[#d4a53a] mb-3">
            Internal Access
          </span>
          <h1 className="text-brand-blue font-heading text-3xl leading-tight">
            Jexpress <span className="text-[#d4a53a]">Dashboard</span>
          </h1>
          <p className="text-[#6b6b6b] font-inter text-sm mt-2">
            Enter your email to receive a login code
          </p>
        </div>
        <DashboardLoginForm />
      </div>
    </div>
  )
}
