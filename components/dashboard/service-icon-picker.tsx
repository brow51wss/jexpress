'use client'

import {
  SERVICE_ICON_KEYS,
  SERVICE_ICON_LABELS,
  type ServiceIconKey,
  ServiceIcon,
} from '@/lib/service-icons'

type ServiceIconPickerProps = {
  value: string
  onChange: (icon: ServiceIconKey) => void
}

export default function ServiceIconPicker({ value, onChange }: ServiceIconPickerProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {SERVICE_ICON_KEYS.map((key) => {
        const selected = value === key
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 transition-all duration-200 ${
              selected
                ? 'bg-[#d4a53a] border-[#d4a53a] text-white shadow-md shadow-[#d4a53a]/25'
                : 'bg-[#f5f5f5] border-[#f5f5f5] text-[#383838] hover:border-[#d4a53a]'
            }`}
          >
            <ServiceIcon
              name={key}
              size={22}
              strokeWidth={1.75}
              className={selected ? 'text-white' : 'text-[#d4a53a]'}
            />
            <span className="font-inter text-[10px] font-semibold uppercase tracking-wide text-center leading-tight">
              {SERVICE_ICON_LABELS[key]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
