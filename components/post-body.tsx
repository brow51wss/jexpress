import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'
import PostToc, { type TocHeading } from '@/components/post-toc'
import PostShareBar from '@/components/post-share-bar'

interface PostBodyProps {
  content: string
  tags?: string[]
  postUrl: string
  postTitle: string
}

// Extract h2/h3 headings from HTML and inject id attributes
function processContent(html: string): { content: string; headings: TocHeading[] } {
  const headings: TocHeading[] = []

  const processed = html.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (_match, level, attrs, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
      headings.push({ id, text, level: parseInt(level) })
      return `<h${level}${attrs} id="${id}">${inner}</h${level}>`
    }
  )

  return { content: processed, headings }
}

export default function PostBody({ content, tags = [], postUrl, postTitle }: PostBodyProps) {
  const { content: processedContent, headings } = processContent(content)

  return (
    // This section is the sticky container boundary —
    // the TOC stops being sticky when this section ends.
    <section style={{ background: '#f5f5f5' }}>
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-16">

        {/* TOC — sticky, inside the content container so it matches article width */}
        <PostToc headings={headings} />

        <div className="mt-10">
          <article
            className="prose-jexpress"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* Share bar — after content, before tags */}
          <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
            <div className="flex items-center gap-4">
              <p className="font-inter text-xs font-bold uppercase tracking-widest text-[#383838]">
                Share this article
              </p>
              <PostShareBar url={postUrl} title={postTitle} size="md" variant="light" />
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
              <p className="font-inter text-xs font-bold uppercase tracking-widest text-[#383838] mb-4">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-[#d4a53a]/10 text-[#d4a53a] font-inter font-semibold text-xs px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to guides */}
          <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
            <Link
              href="/travel-guides"
              className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#d4a53a]/30"
            >
              More Travel Guides
              <RiArrowRightLine size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
