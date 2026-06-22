'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiArrowRightLine, RiTimeLine, RiMapPinLine, RiCloseLine } from 'react-icons/ri'
import PostShareBar from '@/components/post-share-bar'
import { isTravelGuidePublished } from '@/lib/travel-guides'

const BASE_URL = 'https://www.jexpresstransport.com'

// ---------------------------------------------------------------------------
// Post data type — replace this static array with a Supabase fetch when ready
// ---------------------------------------------------------------------------
export interface GuidePost {
  slug: string
  title: string
  excerpt: string
  category: string
  destination: string
  coverImage: string
  author: string
  publishedAt: string
  readTime: string
}

const PLACEHOLDER_POSTS: GuidePost[] = [
  {
    slug: 'private-van-vs-grab-manila',
    title: 'Private Van vs Grab in Manila: Which Is Better for Tourists and Groups?',
    excerpt:
      'Grab works for short city rides, but for families, balikbayans, airport arrivals, and group trips, a private van is usually the more practical choice.',
    category: 'Transport Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_0bccdda460e9ac1e016a38aaf76ae4819b9ac24e54ec47f033-3ecf587f-6b08-4954-896f-44a9429d784c.png',
    author: 'Jexpress Team',
    publishedAt: 'June 21, 2026',
    readTime: '16 min read',
  },
  {
    slug: 'best-vehicle-to-rent-manila-trip',
    title: 'What Is the Best Vehicle to Rent for a Manila Trip? Van, SUV, Sedan, or Bus?',
    excerpt:
      'The best vehicle depends on your group size, luggage, and itinerary. Here is how to choose between a sedan, SUV, van, or bus for your Manila trip.',
    category: 'Transport Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_0661176760d8b1d4016a38acbfee0881918414486d2fe408e4-ee91eddf-1887-43b5-b41e-342c4c827b51.png',
    author: 'Jexpress Team',
    publishedAt: 'June 13, 2026',
    readTime: '18 min read',
  },
  {
    slug: 'manila-travel-guide-2026',
    title: 'Manila Travel Guide 2026: Where to Go Based on Your Travel Style',
    excerpt:
      'Manila has something for almost every type of traveler in 2026. The best itinerary depends on your travel style, schedule, luggage, and how many people are moving together.',
    category: 'Travel Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_052973018dd1dcdb016a38bf10dbb4819bbd5f27fcf6b90686-9aa26c35-f529-4e8f-bacd-62f8f77406c8.png',
    author: 'Jexpress Team',
    publishedAt: 'June 4, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'manila-airport-pickup-group-arrival',
    title: 'How to Plan a Manila Airport Pickup for a Group Arrival',
    excerpt:
      'For group arrivals in Manila, the best airport pickup plan starts before the flight lands. Confirm the terminal, passenger count, luggage, and destination ahead of time.',
    category: 'Airport Pickup',
    destination: 'Manila',
    coverImage: '/images/guides/manila-airport-pickup-group-arrival-02-2400-6f125137-a9e2-48b4-8439-6ec13429462c.png',
    author: 'Jexpress Team',
    publishedAt: 'May 27, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'manila-itinerary-for-balikbayans',
    title: "Best Manila Itinerary for Balikbayans Who Haven't Visited in Years",
    excerpt:
      "The best Manila itinerary for balikbayans combines comfort, nostalgia, family time, food, and shopping. Use a private van when traveling with luggage, seniors, or relatives.",
    category: 'Balikbayan Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_0029aa2cf58d74d6016a38c40026fc8191bb7c37fbf1822a1d-f382e880-d4a7-4252-a539-049e636b1269.png',
    author: 'Jexpress Team',
    publishedAt: 'May 19, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'manila-convention-transport-guide',
    title: 'Manila Convention Travel Guide: How to Get Around SMX, World Trade Center, and BGC',
    excerpt:
      'For Manila conventions, the best transport plan includes airport pickup, hotel transfers, venue drop-offs, and one coordinated vehicle for groups moving between SMX, WTC, and BGC.',
    category: 'Convention Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_0360711b757ed6bd016a38c74bea4c81919fb559634a869c4b-4586695b-972a-4f99-bb82-1ae39899a23f.png',
    author: 'Jexpress Team',
    publishedAt: 'May 11, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'world-trade-center-manila-events-transport',
    title: 'World Trade Center Manila Events 2026: Transportation Tips for Visitors and Exhibitors',
    excerpt:
      'Visiting World Trade Center Manila? Plan transport, pickup points, hotel transfers, and group arrivals early, especially during peak event hours.',
    category: 'Convention Guide',
    destination: 'Manila',
    coverImage: '/images/guides/ig_03da6a7d2c1ed548016a38ca0213e88191b2fd40abfb361320-5ab44a35-784e-4e7e-8f40-d9fe9d2d7813.png',
    author: 'Jexpress Team',
    publishedAt: 'May 3, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'smx-manila-transport-guide',
    title: 'SMX Convention Center Manila Travel Guide: Hotels, Traffic, Pickup Points, and Group Transport',
    excerpt:
      'For SMX Convention Center Manila, book transport around your event schedule, hotel location, traffic windows, and group size. Private vans are ideal for exhibitors and teams.',
    category: 'Convention Guide',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 30, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'manila-digital-nomad-guide',
    title: 'Best Places in Manila for Digital Nomads: Cafes, Coworking Areas, and Easy Transport Routes',
    excerpt:
      'Digital nomads in Manila should choose areas based on internet access, cafes, coworking options, and transport routes. BGC, Makati, Ortigas, and Quezon City are the top picks.',
    category: 'Digital Nomad',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 27, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'family-friendly-manila-itinerary',
    title: 'Family-Friendly Manila Itinerary: Where to Go When Traveling With Kids or Seniors',
    excerpt:
      'A family-friendly Manila itinerary should prioritize comfort, short walking distances, and fewer stops. Families with kids or seniors benefit most from a private van.',
    category: 'Family Travel',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 24, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'manila-layover-guide',
    title: 'Manila Layover Guide: What Can You See in 6, 8, or 12 Hours?',
    excerpt:
      'A Manila layover can work if you plan realistically. With 6 hours, stay close. With 12 hours, you may reach Intramuros, Binondo, or Manila Bay, but traffic comes first.',
    category: 'Travel Guide',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 21, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'manila-traffic-survival-guide',
    title: 'Manila Traffic Survival Guide for Tourists: What to Expect and How to Plan Around It',
    excerpt:
      'Manila traffic can affect airport transfers, city tours, and event arrivals. Group stops by area, allow extra travel time, and consider private transport for multi-stop days.',
    category: 'Travel Tips',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 18, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'best-manila-day-trips-for-groups',
    title: 'Best Manila Day Trips for Groups: Tagaytay, Antipolo, Rizal, Pampanga, and Batangas',
    excerpt:
      'The best Manila day trips for groups include Tagaytay, Antipolo, Rizal, Pampanga, and Batangas. A private van is often the most practical choice for the full day.',
    category: 'Day Trips',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 15, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'manila-travel-time-guide-naia-bgc-makati',
    title: 'How Much Time Should You Allow Between NAIA, BGC, Makati, Pasay, and Quezon City?',
    excerpt:
      'Travel time in Manila depends on traffic, weather, and time of day. For airport transfers and meetings, always allow extra buffer between NAIA, BGC, Makati, and Quezon City.',
    category: 'Travel Tips',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 12, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'best-manila-routes-first-time-visitors',
    title: 'Best Manila Routes for First-Time Visitors: Airport, Hotel, Mall, Historic Sites, and Dinner',
    excerpt:
      'First-time visitors should plan Manila routes by area, not map distance. A good route connects airport pickup, hotel, Intramuros, Binondo, Manila Bay, and dinner efficiently.',
    category: 'Travel Guide',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 9, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'group-travel-manila-van-vs-multiple-cars',
    title: 'Group Travel in Manila: When Should You Book a Van Instead of Multiple Cars?',
    excerpt:
      'Book a van instead of multiple cars when your group has luggage, seniors, kids, several stops, or event timing. One van is easier and safer for coordinated group travel.',
    category: 'Group Travel',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 7, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'manila-business-travel-transport-guide',
    title: 'Manila for Business Travelers: How to Move Between Hotels, Meetings, Airports, and Events',
    excerpt:
      'Business travelers in Manila should plan transport around timing, traffic, and guest coordination. Private vans are best for teams, event guests, and multi-stop schedules.',
    category: 'Business Travel',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 5, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'balikbayan-guide-getting-around-metro-manila',
    title: "A Balikbayan's Guide to Getting Around Metro Manila Safely and Comfortably",
    excerpt:
      'Balikbayans can get around Metro Manila more comfortably by planning airport pickup, grouping stops by area, allowing traffic buffer time, and using a private van.',
    category: 'Balikbayan Guide',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 3, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'private-tourist-transport-philippines',
    title: 'Private Tourist Transport in the Philippines: What It Is and When You Need It',
    excerpt:
      'Private tourist transport in the Philippines is pre-arranged transportation for travelers, groups, events, tours, and airport pickups. Learn when it makes sense over ride-hailing.',
    category: 'Transport Guide',
    destination: 'Philippines',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 2, 2026',
    readTime: '7 min read',
  },
  {
    slug: '2026-manila-event-travel-calendar',
    title: '2026 Manila Event Travel Calendar: When to Book Transport Early',
    excerpt:
      'Attending Manila events in 2026? Book transport early when traveling as a group, carrying equipment, or attending busy conventions, expos, and gatherings.',
    category: 'Event Guide',
    destination: 'Manila',
    coverImage: '/placeholder.svg',
    author: 'Jexpress Team',
    publishedAt: 'May 1, 2026',
    readTime: '7 min read',
  },
]

export default function GuidesGrid({ posts = PLACEHOLDER_POSTS }: { posts?: GuidePost[] }) {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set())

  const visiblePosts = posts.filter((post) => isTravelGuidePublished(post.coverImage))

  // Derive unique categories in insertion order
  const categories = Array.from(new Set(visiblePosts.map((p) => p.category)))

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }

  const filteredPosts = (
    activeCategories.size === 0
      ? visiblePosts
      : visiblePosts.filter((p) => activeCategories.has(p.category))
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">Latest Articles</span>
          <h2 className="font-heading text-brand-blue text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            Stories & <span className="text-[#d4a53a]">Travel Tips</span>
          </h2>
        </div>

        {/* Category filter checkboxes */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const checked = activeCategories.has(cat)
              return (
                <label
                  key={cat}
                  className={`inline-flex items-center gap-2 cursor-pointer select-none font-inter font-semibold text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                    checked
                      ? 'bg-[#d4a53a] border-[#d4a53a] text-white shadow-md shadow-[#d4a53a]/20'
                      : 'bg-white border-[#e5e7eb] text-[#383838] hover:border-[#d4a53a] hover:text-[#d4a53a]'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleCategory(cat)}
                  />
                  {/* Custom checkbox tick */}
                  <span
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      checked ? 'bg-white border-white' : 'border-[#d4a53a]'
                    }`}
                  >
                    {checked && (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                        <path
                          d="M1 3L3 5L7 1"
                          stroke="#d4a53a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {cat}
                </label>
              )
            })}

            {/* Clear button — only visible when a filter is active */}
            {activeCategories.size > 0 && (
              <button
                onClick={() => setActiveCategories(new Set())}
                className="inline-flex items-center gap-1.5 font-inter font-semibold text-xs px-4 py-2 rounded-full border border-[#383838]/20 text-[#6b6b6b] hover:border-[#383838] hover:text-[#383838] bg-white transition-all duration-200"
              >
                <RiCloseLine size={13} />
                Clear filters
              </button>
            )}
          </div>

          {/* Result count — only visible when a filter is active */}
          {activeCategories.size > 0 && (
            <p className="text-center font-inter text-xs text-[#6b6b6b] mt-3">
              Showing{' '}
              <span className="font-semibold text-[#383838]">{filteredPosts.length}</span> of{' '}
              <span className="font-semibold text-[#383838]">{visiblePosts.length}</span> articles
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/travel-guides/${post.slug}`}
              className="group/card bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:border-[#d4a53a] hover:shadow-xl hover:shadow-[#d4a53a]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-52 overflow-hidden bg-brand-blue flex-shrink-0">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover opacity-80 group-hover/card:scale-105 transition-transform duration-500"
                />
                {/* Category pill */}
                <span className="absolute top-4 left-4 inline-block bg-[#d4a53a] text-white font-inter font-semibold text-xs px-3 py-1.5 rounded-full z-10">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[#6b6b6b] text-xs font-inter mb-3">
                  <span className="flex items-center gap-1">
                    <RiMapPinLine size={12} />
                    {post.destination}
                  </span>
                  <span className="flex items-center gap-1">
                    <RiTimeLine size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-brand-blue text-xl sm:text-2xl leading-tight mb-3 group-hover/card:text-[#d4a53a] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Share icons */}
                <div className="mt-4 pt-4 border-t border-[#f5f5f5]">
                  <PostShareBar
                    url={`${BASE_URL}/travel-guides/${post.slug}`}
                    title={post.title}
                    size="sm"
                    variant="light"
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#f5f5f5]">
                  <span className="font-inter text-xs text-[#9ca3af]">{post.publishedAt}</span>
                  <span className="inline-flex items-center gap-1 text-[#d4a53a] font-inter font-semibold text-xs group-hover/card:gap-2 transition-all duration-200">
                    Read More <RiArrowRightLine size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-inter text-[#6b6b6b] text-sm mb-4">
              No articles found for the selected filters.
            </p>
            <button
              onClick={() => setActiveCategories(new Set())}
              className="inline-flex items-center gap-2 bg-[#d4a53a] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#d4a53a]/30"
            >
              Show all articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
