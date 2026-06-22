import Link from 'next/link'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

interface NavPost {
  slug: string
  title: string
}

interface PostNavProps {
  prev: NavPost | null
  next: NavPost | null
}

export default function PostNav({ prev, next }: PostNavProps) {
  if (!prev && !next) return null

  return (
    <section style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#e5e7eb] pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous */}
            <div>
              {prev ? (
                <Link
                  href={`/travel-guides/${prev.slug}`}
                  className="group flex flex-col gap-2 bg-white border border-[#e8e8e8] hover:border-[#d4a53a] hover:shadow-lg hover:shadow-[#d4a53a]/10 rounded-2xl p-5 transition-all duration-200"
                >
                  <span className="inline-flex items-center gap-1.5 text-[#6b6b6b] font-inter text-xs font-semibold uppercase tracking-wide group-hover:text-[#d4a53a] transition-colors duration-200">
                    <RiArrowLeftLine size={14} />
                    Previous
                  </span>
                  <span className="font-heading text-brand-blue text-lg leading-tight group-hover:text-[#d4a53a] transition-colors duration-200">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Next */}
            <div>
              {next ? (
                <Link
                  href={`/travel-guides/${next.slug}`}
                  className="group flex flex-col gap-2 bg-white border border-[#e8e8e8] hover:border-[#d4a53a] hover:shadow-lg hover:shadow-[#d4a53a]/10 rounded-2xl p-5 transition-all duration-200 sm:text-right"
                >
                  <span className="inline-flex items-center gap-1.5 text-[#6b6b6b] font-inter text-xs font-semibold uppercase tracking-wide group-hover:text-[#d4a53a] transition-colors duration-200 sm:justify-end">
                    Next
                    <RiArrowRightLine size={14} />
                  </span>
                  <span className="font-heading text-brand-blue text-lg leading-tight group-hover:text-[#d4a53a] transition-colors duration-200">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
