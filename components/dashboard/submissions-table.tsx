'use client'

import { useState, useEffect, useCallback } from 'react'
import { RiSearchLine, RiArrowDownSLine, RiArrowUpSLine, RiRefreshLine } from 'react-icons/ri'

interface Submission {
  id: string
  form_type: string
  data: Record<string, string>
  created_at: string
}

const FORM_TYPE_LABELS: Record<string, string> = {
  contact: 'Contact',
  booking: 'Booking',
  inquiry: 'Inquiry',
  franchise: 'Franchise',
}

const FORM_TYPE_COLORS: Record<string, string> = {
  contact:   'bg-blue-100 text-blue-700',
  booking:   'bg-green-100 text-green-700',
  inquiry:   'bg-purple-100 text-purple-700',
  franchise: 'bg-orange-100 text-[#d4a53a]',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-PH', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function getSubmitterName(data: Record<string, string>) {
  return data.fullName || data.full_name || '—'
}

function getSubmitterEmail(data: Record<string, string>) {
  return data.email || '—'
}

function SubmissionDetail({ data }: { data: Record<string, string> }) {
  const skip = new Set(['fullName', 'email'])
  const entries = Object.entries(data).filter(([k, v]) => !skip.has(k) && v)
  if (entries.length === 0) return null
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 pt-3 border-t border-[#f5f5f5]">
      {entries.map(([key, value]) => (
        <div key={key}>
          <span className="text-[#6b6b6b] text-xs font-inter font-semibold uppercase tracking-wide">
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
          </span>
          <p className="text-[#383838] text-sm font-inter mt-0.5 whitespace-pre-wrap break-words">
            {value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function SubmissionsTable({ isSuperAdmin }: { isSuperAdmin: boolean }) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [formType, setFormType] = useState('all')
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  void isSuperAdmin

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page) })
      if (formType !== 'all') params.set('form_type', formType)
      const res = await fetch(`/api/dashboard/submissions?${params}`)
      const data = await res.json()
      setSubmissions(data.submissions ?? [])
      setTotal(data.total ?? 0)
    } finally {
      setLoading(false)
    }
  }, [page, formType])

  useEffect(() => { fetchSubmissions() }, [fetchSubmissions])

  const tabs = ['all', 'contact', 'booking', 'inquiry', 'franchise']

  const filtered = search.trim()
    ? submissions.filter((s) => {
        const q = search.toLowerCase()
        return (
          getSubmitterName(s.data).toLowerCase().includes(q) ||
          getSubmitterEmail(s.data).toLowerCase().includes(q)
        )
      })
    : submissions

  const totalPages = Math.ceil(total / 20)

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex gap-1 bg-[#f5f5f5] border border-[#f5f5f5] rounded-xl p-1 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => { setFormType(t); setPage(1) }}
              className={`px-3 py-1.5 rounded-lg text-xs font-inter font-semibold capitalize transition-all duration-150 ${
                formType === t
                  ? 'bg-[#383838] text-white'
                  : 'text-[#6b6b6b] hover:text-[#383838]'
              }`}
            >
              {t === 'all' ? 'All' : FORM_TYPE_LABELS[t]}
            </button>
          ))}
        </div>

        <div className="relative flex-1 max-w-xs">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-[#aaa]" size={14} />
          <input
            type="text"
            placeholder="Search name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 bg-[#f5f5f5] border border-[#f5f5f5] rounded-xl text-sm font-inter text-[#383838] placeholder:text-[#f5f5f5] outline-none focus:border-[#d4a53a] transition-colors"
          />
        </div>

        <button
          onClick={fetchSubmissions}
          className="flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] border border-[#f5f5f5] rounded-xl text-xs font-inter text-[#6b6b6b] hover:text-[#383838] transition-colors ml-auto sm:ml-0"
        >
          <RiRefreshLine size={14} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-[#6b6b6b] text-sm font-inter">
            Loading submissions…
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-2">
            <p className="text-[#383838] font-heading text-lg">No submissions found</p>
            <p className="text-[#6b6b6b] font-inter text-sm">
              {search ? 'Try a different search term.' : 'Submissions will appear here once forms are submitted.'}
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-4 px-5 py-3 bg-[#f5f5f5] border-b border-[#f5f5f5]">
              <span className="text-xs font-inter font-semibold uppercase tracking-wide text-[#6b6b6b]">Name</span>
              <span className="text-xs font-inter font-semibold uppercase tracking-wide text-[#6b6b6b]">Email</span>
              <span className="text-xs font-inter font-semibold uppercase tracking-wide text-[#6b6b6b]">Type</span>
              <span className="text-xs font-inter font-semibold uppercase tracking-wide text-[#6b6b6b]">Date</span>
            </div>

            {filtered.map((sub) => (
              <div key={sub.id} className="border-b border-[#f5f5f5] last:border-0">
                <button
                  onClick={() => setExpanded(expanded === sub.id ? null : sub.id)}
                  className="w-full grid grid-cols-[1fr_1fr_auto_auto] gap-4 px-5 py-3.5 hover:bg-[#f5f5f5] transition-colors text-left items-center"
                >
                  <span className="font-inter font-semibold text-[#383838] text-sm truncate">
                    {getSubmitterName(sub.data)}
                  </span>
                  <span className="font-inter text-[#6b6b6b] text-sm truncate">
                    {getSubmitterEmail(sub.data)}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-inter font-semibold ${FORM_TYPE_COLORS[sub.form_type] ?? 'bg-gray-100 text-gray-600'}`}>
                    {FORM_TYPE_LABELS[sub.form_type] ?? sub.form_type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6b6b6b] text-xs font-inter whitespace-nowrap">
                      {formatDate(sub.created_at)}
                    </span>
                    {expanded === sub.id
                      ? <RiArrowUpSLine size={16} className="text-[#6b6b6b] flex-shrink-0" />
                      : <RiArrowDownSLine size={16} className="text-[#6b6b6b] flex-shrink-0" />
                    }
                  </div>
                </button>

                {expanded === sub.id && (
                  <div className="px-5 pb-4 bg-[#f5f5f5]">
                    <SubmissionDetail data={sub.data} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs font-inter text-[#6b6b6b]">
            Showing {(page - 1) * 20 + 1}–{Math.min(page * 20, total)} of {total}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 bg-[#f5f5f5] border border-[#f5f5f5] rounded-lg text-xs font-inter text-[#383838] disabled:opacity-40 hover:border-[#d4a53a] transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 bg-[#f5f5f5] border border-[#f5f5f5] rounded-lg text-xs font-inter text-[#383838] disabled:opacity-40 hover:border-[#d4a53a] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
