import Image from 'next/image'
import Link from 'next/link'
import { RiArrowLeftLine, RiTimeLine, RiMapPinLine, RiCalendarLine } from 'react-icons/ri'
import PostShareBar from '@/components/post-share-bar'

interface PostHeroProps {
  title: string
  excerpt: string
  category: string
  destination: string
  author: string
  publishedAt: string
  readTime: string
  coverImage: string
  postUrl: string
}

export default function PostHero({
  title,
  excerpt,
  category,
  destination,
  author,
  publishedAt,
  readTime,
  coverImage,
  postUrl,
}: PostHeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-end overflow-hidden pt-24">
      {/* Cover image */}
      <div className="absolute inset-0">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #00193c80 0%, #00193c 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
        {/* Back link */}
        <Link
          href="/travel-guides"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#d4a53a] font-inter text-sm transition-colors duration-200 mb-8 group"
        >
          <RiArrowLeftLine size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Travel Guides
        </Link>

        {/* Category */}
        <div className="mb-4">
          <span className="inline-block bg-[#d4a53a] text-white font-inter font-semibold text-xs px-4 py-2 rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-5 max-w-4xl">
          {title}
        </h1>

        {/* Excerpt */}
        <p className="font-inter text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
          {excerpt}
        </p>

        {/* Meta row + share bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-sm font-inter text-white/60">
            <span className="text-white font-medium">{author}</span>
            <span className="flex items-center gap-1.5">
              <RiCalendarLine size={14} />
              {publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <RiTimeLine size={14} />
              {readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <RiMapPinLine size={14} />
              {destination}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-inter text-xs font-semibold uppercase tracking-widest text-white/50">
              Share
            </span>
            <PostShareBar url={postUrl} title={title} size="sm" variant="dark" />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
          <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
          <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
        </svg>
      </div>
    </section>
  )
}
