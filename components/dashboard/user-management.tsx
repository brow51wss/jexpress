'use client'

import { useState, useEffect, useCallback } from 'react'
import { RiAddLine, RiDeleteBinLine, RiLoader4Line, RiUserLine, RiGroupLine, RiLockLine } from 'react-icons/ri'

interface Group {
  id: string
  name: string
  is_system: boolean
}

interface User {
  id: string
  email: string
  is_super_admin: boolean
  group_id: string | null
  created_at: string
  groups: { name: string } | null
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState(true)

  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserGroup, setNewUserGroup] = useState('')
  const [addingUser, setAddingUser] = useState(false)
  const [userError, setUserError] = useState('')

  const [newGroupName, setNewGroupName] = useState('')
  const [addingGroup, setAddingGroup] = useState(false)
  const [groupError, setGroupError] = useState('')

  const inputClass =
    'w-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3 text-sm font-inter outline-none transition-all duration-200'

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const [uRes, gRes] = await Promise.all([
        fetch('/api/dashboard/users'),
        fetch('/api/dashboard/groups'),
      ])
      const [uData, gData] = await Promise.all([uRes.json(), gRes.json()])
      setUsers(uData.users ?? [])
      setGroups(gData.groups ?? [])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchData() }, [fetchData])

  async function handleAddUser(e: React.FormEvent) {
    e.preventDefault()
    if (!newUserEmail.trim()) { setUserError('Email is required.'); return }
    setAddingUser(true)
    setUserError('')
    try {
      const res = await fetch('/api/dashboard/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newUserEmail.trim(), groupId: newUserGroup || null }),
      })
      const data = await res.json()
      if (!res.ok) { setUserError(data.error ?? 'Failed to add user.'); return }
      setNewUserEmail('')
      setNewUserGroup('')
      fetchData()
    } catch {
      setUserError('Something went wrong.')
    } finally {
      setAddingUser(false)
    }
  }

  async function handleDeleteUser(id: string) {
    if (!confirm('Remove this user from the dashboard?')) return
    await fetch(`/api/dashboard/users?id=${id}`, { method: 'DELETE' })
    fetchData()
  }

  async function handleChangeGroup(userId: string, groupId: string) {
    await fetch('/api/dashboard/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId, groupId: groupId || null }),
    })
    fetchData()
  }

  async function handleAddGroup(e: React.FormEvent) {
    e.preventDefault()
    if (!newGroupName.trim()) { setGroupError('Group name is required.'); return }
    setAddingGroup(true)
    setGroupError('')
    try {
      const res = await fetch('/api/dashboard/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newGroupName.trim() }),
      })
      const data = await res.json()
      if (!res.ok) { setGroupError(data.error ?? 'Failed to create group.'); return }
      setNewGroupName('')
      fetchData()
    } catch {
      setGroupError('Something went wrong.')
    } finally {
      setAddingGroup(false)
    }
  }

  async function handleDeleteGroup(id: string) {
    if (!confirm('Delete this group? Users in it will be unassigned.')) return
    await fetch(`/api/dashboard/groups?id=${id}`, { method: 'DELETE' })
    fetchData()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-[#6b6b6b] text-sm font-inter gap-2">
        <RiLoader4Line size={16} className="animate-spin" /> Loading…
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">

      {/* Users panel */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl overflow-hidden">
          <div className="px-5 py-4 bg-[#f5f5f5] border-b border-[#f5f5f5] flex items-center gap-2">
            <RiUserLine size={16} className="text-[#d4a53a]" />
            <h2 className="font-heading text-[#383838] text-sm">
              Dashboard Users <span className="text-[#6b6b6b] font-normal">({users.length})</span>
            </h2>
          </div>

          {users.length === 0 ? (
            <p className="px-5 py-8 text-center text-[#6b6b6b] text-sm font-inter">No users yet.</p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 px-5 py-3.5 border-b border-[#f5f5f5] last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-semibold text-[#383838] text-sm truncate">
                    {user.email}
                  </p>
                  {user.is_super_admin && (
                    <span className="inline-block text-[10px] font-inter font-semibold uppercase tracking-wider text-[#d4a53a] bg-[#d4a53a]/10 px-2 py-0.5 rounded-full mt-0.5">
                      Super Admin
                    </span>
                  )}
                </div>

                {!user.is_super_admin && (
                  <>
                    <select
                      value={user.group_id ?? ''}
                      onChange={(e) => handleChangeGroup(user.id, e.target.value)}
                      className="text-xs font-inter border border-[#f5f5f5] rounded-lg px-2 py-1.5 text-[#383838] bg-[#f5f5f5] outline-none focus:border-[#d4a53a] transition-colors"
                    >
                      <option value="">No group</option>
                      {groups.map((g) => (
                        <option key={g.id} value={g.id}>{g.name}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-[#6b6b6b] hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <RiDeleteBinLine size={16} />
                    </button>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        {/* Add user form */}
        <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl p-5">
          <h3 className="font-heading text-[#383838] mb-3 flex items-center gap-2">
            <RiAddLine size={16} className="text-[#d4a53a]" /> Add User
          </h3>
          <form onSubmit={handleAddUser} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="user@example.com"
              value={newUserEmail}
              onChange={(e) => { setNewUserEmail(e.target.value); setUserError('') }}
              className={inputClass}
            />
            <select
              value={newUserGroup}
              onChange={(e) => setNewUserGroup(e.target.value)}
              className={inputClass}
            >
              <option value="">No group (optional)</option>
              {groups.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
            {userError && <p className="text-red-500 text-xs font-inter">{userError}</p>}
            <button
              type="submit"
              disabled={addingUser}
              className="flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              {addingUser
                ? <RiLoader4Line size={14} className="animate-spin" />
                : <><RiAddLine size={14} /> Add User</>
              }
            </button>
          </form>
        </div>
      </div>

      {/* Groups panel */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl overflow-hidden">
          <div className="px-5 py-4 bg-[#f5f5f5] border-b border-[#f5f5f5] flex items-center gap-2">
            <RiGroupLine size={16} className="text-[#d4a53a]" />
            <h2 className="font-heading text-[#383838] text-sm">
              Groups <span className="text-[#6b6b6b] font-normal">({groups.length})</span>
            </h2>
          </div>

          {groups.length === 0 ? (
            <p className="px-5 py-8 text-center text-[#6b6b6b] text-sm font-inter">No groups yet.</p>
          ) : (
            groups.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-between px-5 py-3 border-b border-[#f5f5f5] last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="font-inter font-semibold text-[#383838] text-sm">{group.name}</span>
                  {group.is_system && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-inter font-semibold uppercase tracking-wider text-[#6b6b6b] bg-[#f5f5f5] border border-[#f5f5f5] px-2 py-0.5 rounded-full">
                      <RiLockLine size={9} /> System
                    </span>
                  )}
                </div>
                {!group.is_system && (
                  <button
                    onClick={() => handleDeleteGroup(group.id)}
                    className="text-[#6b6b6b] hover:text-red-500 transition-colors"
                  >
                    <RiDeleteBinLine size={15} />
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        {/* Add group form */}
        <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl p-5">
          <h3 className="font-heading text-[#383838] mb-3 flex items-center gap-2">
            <RiAddLine size={16} className="text-[#d4a53a]" /> Create Group
          </h3>
          <form onSubmit={handleAddGroup} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="e.g. Sales Team"
              value={newGroupName}
              onChange={(e) => { setNewGroupName(e.target.value); setGroupError('') }}
              className={inputClass}
            />
            {groupError && <p className="text-red-500 text-xs font-inter">{groupError}</p>}
            <button
              type="submit"
              disabled={addingGroup}
              className="flex items-center justify-center gap-2 bg-[#383838] hover:bg-[#2a2a2a] disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
            >
              {addingGroup
                ? <RiLoader4Line size={14} className="animate-spin" />
                : <><RiAddLine size={14} /> Create Group</>
              }
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
