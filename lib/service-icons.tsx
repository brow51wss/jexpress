import type { ComponentType } from 'react'
import {
  Bus,
  Users,
  MapPin,
  Wrench,
  Truck,
  Shield,
  Clock,
  Package,
  Globe,
  Building,
  Star,
  Headphones,
  PlaneTakeoff,
  CalendarDays,
  Palmtree,
  Hotel,
  Car,
  type LucideProps,
} from 'lucide-react'

export const SERVICE_ICON_KEYS = [
  'Bus',
  'Plane',
  'Calendar',
  'Palmtree',
  'Hotel',
  'Car',
  'Users',
  'MapPin',
  'Truck',
  'Shield',
  'Clock',
  'Package',
  'Globe',
  'Building',
  'Star',
  'Headphones',
  'Wrench',
] as const

export type ServiceIconKey = (typeof SERVICE_ICON_KEYS)[number]

/** Short labels for the dashboard icon picker */
export const SERVICE_ICON_LABELS: Record<ServiceIconKey, string> = {
  Bus: 'Bus / Shuttle',
  Plane: 'Airport',
  Calendar: 'Group / Events',
  Palmtree: 'Tour / Vacation',
  Hotel: 'Hotel',
  Car: 'City Transfer',
  Users: 'Passengers',
  MapPin: 'Location',
  Truck: 'Freight',
  Shield: 'Safety',
  Clock: 'Schedule',
  Package: 'Cargo',
  Globe: 'Nationwide',
  Building: 'Corporate',
  Star: 'Premium',
  Headphones: 'Support',
  Wrench: 'Maintenance',
}

const LUCIDE_MAP: Record<ServiceIconKey, ComponentType<LucideProps>> = {
  Bus,
  Plane: PlaneTakeoff,
  Calendar: CalendarDays,
  Palmtree,
  Hotel,
  Car,
  Users,
  MapPin,
  Wrench,
  Truck,
  Shield,
  Clock,
  Package,
  Globe,
  Building,
  Star,
  Headphones,
}

export function isServiceIconKey(value: string): value is ServiceIconKey {
  return (SERVICE_ICON_KEYS as readonly string[]).includes(value)
}

type ServiceIconProps = {
  name: string
  size?: number
  className?: string
  strokeWidth?: number
}

export function ServiceIcon({
  name,
  size = 22,
  className,
  strokeWidth = 1.75,
}: ServiceIconProps) {
  const Icon = isServiceIconKey(name) ? LUCIDE_MAP[name] : Bus
  return <Icon size={size} className={className} strokeWidth={strokeWidth} />
}
