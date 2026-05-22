'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  RiAddLine, RiLoader4Line, RiEditLine, RiEyeLine, RiEyeOffLine,
  RiArrowUpLine, RiArrowDownLine, RiDeleteBinLine, RiCheckLine,
  RiCloseLine, RiPriceTag3Line,
} from 'react-icons/ri'

import ServiceIconPicker from '@/components/dashboard/service-icon-picker'

interface ServiceContent {
  id?: string
  section_key: string
  description: string
  tags: string[]
}

interface Service {
  id: string
  slug: string
  name: string
  price: number | null
  price_label: 'flat' | 'from'
  icon: string
  sort_order: number
  is_active: boolean
  service_content: ServiceContent[]
}

const inputClass =
  'w-full bg-white border border-[#d1d5db] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#9ca3af] rounded-xl px-4 py-3 text-sm font-inter outline-none transition-all duration-200'

const labelClass = 'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'

function getContent(service: Service, sectionKey: string): ServiceContent {
  return service.service_content.find((c) => c.section_key === sectionKey) ?? {
    section_key: sectionKey,
    description: '',
    tags: [],
  }
}

function ServiceEditor({
  service,
  onSaved,
  onClose,
}: {
  service: Service
  onSaved: () => void
  onClose: () => void
}) {
  const [name, setName] = useState(service.name)
  const [icon, setIcon] = useState(service.icon)
  const [price, setPrice] = useState(service.price !== null ? String(service.price) : '')
  const [priceLabel, setPriceLabel] = useState<'flat' | 'from'>(service.price_label)
  const [activeTab, setActiveTab] = useState<'details' | 'homepage' | 'services_page'>('details')
  const [savingDetails, setSavingDetails] = useState(false)

  const [homepageDesc, setHomepageDesc] = useState(getContent(service, 'homepage').description)
  const [servicesDesc, setServicesDesc] = useState(getContent(service, 'services_page').description)
  const [servicesTags, setServicesTags] = useState(
    getContent(service, 'services_page').tags.join('\n')
  )
  const [savingContent, setSavingContent] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')

  async function saveDetails(e: React.FormEvent) {
    e.preventDefault()
    setSavingDetails(true)
    setSaveMsg('')
    try {
      const res = await fetch(`/api/dashboard/services/${service.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          icon,
          price: price !== '' ? parseFloat(price) : null,
          price_label: priceLabel,
        }),
      })
      if (!res.ok) {
        const d = await res.json()
        setSaveMsg(d.error ?? 'Failed to save.')
      } else {
        setSaveMsg('Saved!')
        onSaved()
      }
    } catch {
      setSaveMsg('Something went wrong.')
    } finally {
      setSavingDetails(false)
      setTimeout(() => setSaveMsg(''), 3000)
    }
  }

  async function saveContent(sectionKey: string) {
    setSavingContent(true)
    setSaveMsg('')
    try {
      const description = sectionKey === 'homepage' ? homepageDesc : servicesDesc
      const tags = sectionKey === 'services_page'
        ? servicesTags.split('\n').map((t) => t.trim()).filter(Boolean)
        : []
      const res = await fetch(`/api/dashboard/services/${service.id}/content`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section_key: sectionKey, description, tags }),
      })
      if (!res.ok) {
        const d = await res.json()
        setSaveMsg(d.error ?? 'Failed to save.')
      } else {
        setSaveMsg('Content saved!')
        onSaved()
      }
    } catch {
      setSaveMsg('Something went wrong.')
    } finally {
      setSavingContent(false)
      setTimeout(() => setSaveMsg(''), 3000)
    }
  }

  const tabs = [
    { key: 'details', label: 'Details & Price' },
    { key: 'homepage', label: 'Homepage Card' },
    { key: 'services_page', label: 'Services Page' },
  ] as const

  return (
    <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl overflow-hidden">
      {/* Editor header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#f5f5f5] border-b border-[#f5f5f5]">
        <h3 className="font-heading text-[#383838]">Editing: {service.name}</h3>
        <button onClick={onClose} className="text-[#6b6b6b] hover:text-[#383838] transition-colors">
          <RiCloseLine size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#f5f5f5]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-3 text-xs font-inter font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-px ${
              activeTab === tab.key
                ? 'text-[#d4a53a] border-[#d4a53a]'
                : 'text-[#6b6b6b] border-transparent hover:text-[#383838]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {/* Details & Price tab */}
        {activeTab === 'details' && (
          <form onSubmit={saveDetails} className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>Service Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Icon</label>
              <ServiceIconPicker
                value={icon}
                onChange={(next) => setIcon(next)}
              />
            </div>

            <div className={`grid gap-4 ${price !== '' && !isNaN(parseFloat(price)) && parseFloat(price) > 0 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              <div>
                <label className={labelClass}>Price (₱) — leave blank to hide on site</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="e.g. 1500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={inputClass}
                />
              </div>
              {price !== '' && !isNaN(parseFloat(price)) && parseFloat(price) > 0 && (
                <div>
                  <label className={labelClass}>Price Display</label>
                  <select
                    value={priceLabel}
                    onChange={(e) => setPriceLabel(e.target.value as 'flat' | 'from')}
                    className={inputClass}
                  >
                    <option value="flat">₱{Number(parseFloat(price)).toLocaleString()}</option>
                    <option value="from">From ₱{Number(parseFloat(price)).toLocaleString()}</option>
                  </select>
                </div>
              )}
            </div>

            {saveMsg && (
              <p className={`text-xs font-inter ${saveMsg === 'Saved!' ? 'text-green-600' : 'text-red-500'}`}>
                {saveMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={savingDetails}
              className="flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              {savingDetails
                ? <RiLoader4Line size={14} className="animate-spin" />
                : <><RiCheckLine size={14} /> Save Details</>}
            </button>
          </form>
        )}

        {/* Homepage content tab */}
        {activeTab === 'homepage' && (
          <div className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>Short Description (homepage card)</label>
              <textarea
                value={homepageDesc}
                onChange={(e) => setHomepageDesc(e.target.value)}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="1–2 sentences describing this service for the homepage card."
              />
            </div>

            {saveMsg && (
              <p className={`text-xs font-inter ${saveMsg.includes('saved') ? 'text-green-600' : 'text-red-500'}`}>
                {saveMsg}
              </p>
            )}

            <button
              onClick={() => saveContent('homepage')}
              disabled={savingContent}
              className="flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              {savingContent
                ? <RiLoader4Line size={14} className="animate-spin" />
                : <><RiCheckLine size={14} /> Save Homepage Content</>}
            </button>
          </div>
        )}

        {/* Services page content tab */}
        {activeTab === 'services_page' && (
          <div className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>Full Description (services page)</label>
              <textarea
                value={servicesDesc}
                onChange={(e) => setServicesDesc(e.target.value)}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Detailed description for the /services page card."
              />
            </div>
            <div>
              <label className={labelClass}>Tags / Key Areas (one per line)</label>
              <textarea
                value={servicesTags}
                onChange={(e) => setServicesTags(e.target.value)}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder={'Organized Tours\nGroup Transport\nLand & Sea'}
              />
              <p className="text-[#6b6b6b] text-xs font-inter mt-1">
                These appear as the orange tag pills on the right side of each service card.
              </p>
            </div>

            {saveMsg && (
              <p className={`text-xs font-inter ${saveMsg.includes('saved') ? 'text-green-600' : 'text-red-500'}`}>
                {saveMsg}
              </p>
            )}

            <button
              onClick={() => saveContent('services_page')}
              disabled={savingContent}
              className="flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              {savingContent
                ? <RiLoader4Line size={14} className="animate-spin" />
                : <><RiCheckLine size={14} /> Save Services Page Content</>}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [newIcon, setNewIcon] = useState('Bus')
  const [adding, setAdding] = useState(false)
  const [addError, setAddError] = useState('')

  const fetchServices = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/dashboard/services')
      const data = await res.json()
      setServices(data.services ?? [])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchServices() }, [fetchServices])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!newName.trim()) { setAddError('Name is required.'); return }
    setAdding(true)
    setAddError('')
    try {
      const res = await fetch('/api/dashboard/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName.trim(), icon: newIcon }),
      })
      const data = await res.json()
      if (!res.ok) { setAddError(data.error ?? 'Failed to add.'); return }
      setNewName('')
      setNewIcon('Bus')
      setShowAdd(false)
      fetchServices()
    } catch {
      setAddError('Something went wrong.')
    } finally {
      setAdding(false)
    }
  }

  async function toggleActive(service: Service) {
    await fetch(`/api/dashboard/services/${service.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !service.is_active }),
    })
    fetchServices()
  }

  async function handleDelete(service: Service) {
    if (!confirm(`Permanently delete "${service.name}"? This cannot be undone.`)) return
    await fetch(`/api/dashboard/services/${service.id}`, { method: 'DELETE' })
    if (editingId === service.id) setEditingId(null)
    fetchServices()
  }

  async function moveOrder(service: Service, direction: 'up' | 'down') {
    const idx = services.findIndex((s) => s.id === service.id)
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1
    if (swapIdx < 0 || swapIdx >= services.length) return
    const other = services[swapIdx]
    await Promise.all([
      fetch(`/api/dashboard/services/${service.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sort_order: other.sort_order }),
      }),
      fetch(`/api/dashboard/services/${other.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sort_order: service.sort_order }),
      }),
    ])
    fetchServices()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-[#6b6b6b] text-sm font-inter gap-2">
        <RiLoader4Line size={16} className="animate-spin" /> Loading services…
      </div>
    )
  }

  const editingService = services.find((s) => s.id === editingId) ?? null

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-inter text-[#6b6b6b] text-sm">
            {services.filter((s) => s.is_active).length} active · {services.filter((s) => !s.is_active).length} hidden
          </p>
        </div>
        <button
          onClick={() => { setShowAdd(true); setEditingId(null) }}
          className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
        >
          <RiAddLine size={16} /> Add Service
        </button>
      </div>

      {/* Add service form */}
      {showAdd && (
        <div className="bg-[#f5f5f5] border border-[#d4a53a]/40 rounded-2xl p-6">
          <h3 className="font-heading text-[#383838] mb-4 flex items-center gap-2">
            <RiAddLine size={16} className="text-[#d4a53a]" /> New Service
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col gap-4">
            <div>
              <label className={labelClass}>Service Name</label>
              <input
                value={newName}
                onChange={(e) => { setNewName(e.target.value); setAddError('') }}
                className={inputClass}
                placeholder="e.g. Corporate Charter Services"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Icon</label>
              <ServiceIconPicker
                value={newIcon}
                onChange={(next) => setNewIcon(next)}
              />
            </div>
            {addError && <p className="text-red-500 text-xs font-inter">{addError}</p>}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={adding}
                className="flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
              >
                {adding ? <RiLoader4Line size={14} className="animate-spin" /> : <><RiAddLine size={14} /> Add Service</>}
              </button>
              <button
                type="button"
                onClick={() => { setShowAdd(false); setAddError('') }}
                className="text-[#6b6b6b] hover:text-[#383838] font-inter text-sm transition-colors px-4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services list */}
      <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl overflow-hidden">
        <div className="px-5 py-4 bg-[#f5f5f5] border-b border-[#f5f5f5] flex items-center gap-2">
          <RiPriceTag3Line size={16} className="text-[#d4a53a]" />
          <h2 className="font-heading text-[#383838] text-sm">All Services</h2>
        </div>

        {services.length === 0 ? (
          <p className="px-5 py-10 text-center text-[#6b6b6b] text-sm font-inter">No services yet.</p>
        ) : (
          services.map((service, idx) => (
            <div
              key={service.id}
              className={`border-b border-[#f5f5f5] last:border-0 ${!service.is_active ? 'opacity-50' : ''}`}
            >
              <div className="flex items-center gap-3 px-5 py-3.5">
                {/* Reorder */}
                <div className="flex flex-col gap-0.5 flex-shrink-0">
                  <button
                    onClick={() => moveOrder(service, 'up')}
                    disabled={idx === 0}
                    className="text-[#f5f5f5] hover:text-[#383838] disabled:opacity-30 transition-colors"
                  >
                    <RiArrowUpLine size={13} />
                  </button>
                  <button
                    onClick={() => moveOrder(service, 'down')}
                    disabled={idx === services.length - 1}
                    className="text-[#f5f5f5] hover:text-[#383838] disabled:opacity-30 transition-colors"
                  >
                    <RiArrowDownLine size={13} />
                  </button>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-semibold text-[#383838] text-sm truncate">{service.name}</p>
                  <p className="font-inter text-[#6b6b6b] text-xs mt-0.5 flex items-center gap-2">
                    <span className="bg-[#f5f5f5] px-2 py-0.5 rounded-full border border-[#f5f5f5]">{service.icon}</span>
                    {service.price !== null
                      ? <span className="text-[#d4a53a] font-semibold">
                          {service.price_label === 'from' ? 'From ' : ''}₱{Number(service.price).toLocaleString()}
                        </span>
                      : <span className="text-[#f5f5f5]">No price set</span>
                    }
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => toggleActive(service)}
                    title={service.is_active ? 'Hide from site' : 'Show on site'}
                    className="p-1.5 text-[#6b6b6b] hover:text-[#d4a53a] transition-colors"
                  >
                    {service.is_active ? <RiEyeLine size={16} /> : <RiEyeOffLine size={16} />}
                  </button>
                  <button
                    onClick={() => setEditingId(editingId === service.id ? null : service.id)}
                    title="Edit"
                    className={`p-1.5 transition-colors ${editingId === service.id ? 'text-[#d4a53a]' : 'text-[#6b6b6b] hover:text-[#d4a53a]'}`}
                  >
                    <RiEditLine size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(service)}
                    title="Delete permanently"
                    className="p-1.5 text-[#6b6b6b] hover:text-red-500 transition-colors"
                  >
                    <RiDeleteBinLine size={16} />
                  </button>
                </div>
              </div>

              {/* Inline editor */}
              {editingId === service.id && editingService && (
                <div className="px-5 pb-5">
                  <ServiceEditor
                    service={editingService}
                    onSaved={fetchServices}
                    onClose={() => setEditingId(null)}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
