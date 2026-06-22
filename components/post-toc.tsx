'use client'

import { useEffect, useRef, useState } from 'react'

export interface TocHeading {
  id: string
  text: string
  level: number
}

interface PostTocProps {
  headings: TocHeading[]
}

export default function PostToc({ headings }: PostTocProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isStuck, setIsStuck] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map())

  // Detect when the TOC has become sticky
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const stickyObserver = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: '-81px 0px 0px 0px' }
    )
    stickyObserver.observe(sentinel)
    return () => stickyObserver.disconnect()
  }, [])

  // Scroll-spy: highlight active heading
  useEffect(() => {
    if (headings.length === 0) return

    const headingEls = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
    )

    headingEls.forEach((el) => observerRef.current!.observe(el))
    return () => observerRef.current?.disconnect()
  }, [headings])

  // Auto-scroll the TOC pill list so the active pill stays centered
  useEffect(() => {
    if (!activeId || !listRef.current) return
    const container = listRef.current
    const activeItem = itemRefs.current.get(activeId)
    if (!activeItem) return

    const targetLeft =
      activeItem.offsetLeft - container.offsetWidth / 2 + activeItem.offsetWidth / 2

    container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
  }, [activeId])

  if (headings.length === 0) return null

  return (
    <>
      {/* Sentinel — sits just above where sticky kicks in */}
      <div ref={sentinelRef} aria-hidden="true" />

      <div
        className={`sticky top-[65px] z-30 bg-white border border-[#e5e7eb] rounded-2xl transition-shadow duration-200 ${
          isStuck ? 'shadow-lg shadow-[#383838]/8 rounded-none border-x-0 border-t-0 rounded-b-2xl' : 'shadow-sm'
        }`}
      >
        <div className="py-5 pl-4 pr-10">
          <p className="font-inter text-xs font-bold uppercase tracking-widest text-[#383838] mb-4">
            On This Page
          </p>
          <ul ref={listRef} className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {headings.map((heading, index) => (
              <li
                key={heading.id}
                ref={(el) => { if (el) itemRefs.current.set(heading.id, el) }}
                className="flex items-center gap-1 flex-shrink-0"
              >
                {index > 0 && (
                  <span className="text-[#d4a53a] text-xs select-none px-0.5" aria-hidden="true">·</span>
                )}
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById(heading.id)
                    if (el) {
                      const offset = 96
                      const top = el.getBoundingClientRect().top + window.scrollY - offset
                      window.scrollTo({ top, behavior: 'smooth' })
                    }
                  }}
                  className={`whitespace-nowrap font-inter text-sm py-1 px-3 rounded-full border transition-all duration-200 ${
                    heading.level === 3 ? 'text-xs' : ''
                  } ${
                    activeId === heading.id
                      ? 'bg-[#d4a53a]/10 text-[#d4a53a] font-semibold border-[#d4a53a]'
                      : 'text-[#6b6b6b] border-[#e5e7eb] hover:text-[#383838] hover:border-[#383838]/30 hover:bg-black/5'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
