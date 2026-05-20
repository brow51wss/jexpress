import type { ReactNode } from 'react'

type FormFieldProps = {
  children: ReactNode
  className?: string
}

/** Wraps form controls so browser extension injections (LastPass, etc.) do not cause hydration mismatches. */
export default function FormField({
  children,
  className = 'flex flex-col gap-1.5',
}: FormFieldProps) {
  return (
    <div className={className} suppressHydrationWarning>
      {children}
    </div>
  )
}
