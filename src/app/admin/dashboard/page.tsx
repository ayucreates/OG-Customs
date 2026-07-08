'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  order: number
  published: boolean
  createdAt: string
}

interface Enquiry {
  id: number
  name: string
  phone: string
  service: string
  message: string
  createdAt: string
}

interface Setting {
  id: number
  key: string
  value: string
}

type Tab = 'projects' | 'enquiries' | 'settings'

const emptyProject = { title: '', category: '', description: '', image: '', order: 0, published: true }

export default function AdminDashboard() {
  const [token, setToken] = useState<string | null>(null)
  const [tab, setTab] = useState<Tab>('projects')
  const [projects, setProjects] = useState<Project[]>([])
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [settings, setSettings] = useState<Setting[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Project | null>(null)
  const [form, setForm] = useState(emptyProject)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [settingsForm, setSettingsForm] = useState<Record<string, string>>({})
  const [settingsSaving, setSettingsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const t = localStorage.getItem('token')
    if (!t) {
      router.push('/admin/login')
    } else {
      setToken(t)
    }
  }, [router])

  useEffect(() => {
    if (!token) return
    fetchProjects()
    fetchEnquiries()
    fetchSettings()
  }, [token])

  async function fetchProjects() {
    const res = await fetch('/api/projects')
    if (res.ok) setProjects(await res.json())
  }

  async function fetchEnquiries() {
    const res = await fetch('/api/enquiry')
    if (res.ok) setEnquiries(await res.json())
  }

  async function fetchSettings() {
    const res = await fetch('/api/settings')
    if (res.ok) {
      const data: Setting[] = await res.json()
      setSettings(data)
      const map: Record<string, string> = {}
      data.forEach((s) => { map[s.key] = s.value })
      setSettingsForm(map)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    router.push('/admin/login')
  }

  function openAdd() {
    setForm(emptyProject)
    setEditing(null)
    setShowModal(true)
  }

  function openEdit(project: Project) {
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image,
      order: project.order,
      published: project.published,
    })
    setEditing(project)
    setShowModal(true)
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      const url = editing ? `/api/projects/${editing.id}` : '/api/projects'
      const method = editing ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setShowModal(false)
        fetchProjects()
      }
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Delete this project?')) return
    const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' })
    if (res.ok) fetchProjects()
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok) setForm((prev) => ({ ...prev, image: data.url }))
    } finally {
      setUploading(false)
    }
  }

  async function handleSettingsSave(e: FormEvent) {
    e.preventDefault()
    setSettingsSaving(true)
    try {
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsForm),
      })
      fetchSettings()
    } finally {
      setSettingsSaving(false)
    }
  }

  if (!token) return null

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
        <h1 className="text-lg font-bold">OG Customs Admin</h1>
        <button onClick={handleLogout} className="text-sm text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">
          Logout
        </button>
      </header>

      <nav className="flex gap-4 px-6 py-3 border-b border-[var(--border)]">
        {(['projects', 'enquiries', 'settings'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm capitalize px-3 py-1 rounded-lg transition-colors ${
              tab === t ? 'bg-[var(--primary)] text-[var(--primary-fg)]' : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
            }`}
          >
            {t}
          </button>
        ))}
      </nav>

      <main className="p-6">
        {tab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Projects</h2>
              <button onClick={openAdd} className="px-4 py-1.5 bg-[var(--primary)] text-[var(--primary-fg)] rounded-lg text-sm hover:opacity-90 transition-opacity">
                Add Project
              </button>
            </div>
            <div className="grid gap-3">
              {projects.map((p) => (
                <div key={p.id} className="flex items-center gap-4 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-4">
                  {p.image && <img src={p.image} alt={p.title} className="w-16 h-12 object-cover rounded" />}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{p.title}</p>
                    <p className="text-xs text-[var(--muted-fg)]">{p.category} &middot; Order {p.order} &middot; {p.published ? 'Published' : 'Draft'}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => openEdit(p)} className="text-xs px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--card-bg)] transition-colors">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="text-xs px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition-colors">Delete</button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && <p className="text-sm text-[var(--muted-fg)]">No projects yet.</p>}
            </div>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <form onSubmit={handleSave} className="w-full max-w-lg bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold">{editing ? 'Edit Project' : 'Add Project'}</h3>

                  <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-sm" required />

                  <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))} className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-sm" required />

                  <textarea placeholder="Description" value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-sm resize-none h-20" />

                  <div>
                    <label className="block text-sm mb-1">Image</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm" />
                    {uploading && <p className="text-xs text-[var(--muted-fg)] mt-1">Uploading...</p>}
                    {form.image && <p className="text-xs text-[var(--muted-fg)] mt-1 truncate">{form.image}</p>}
                  </div>

                  <input type="number" placeholder="Order" value={form.order} onChange={(e) => setForm((p) => ({ ...p, order: Number(e.target.value) }))} className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-sm" />

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={form.published} onChange={(e) => setForm((p) => ({ ...p, published: e.target.checked }))} />
                    Published
                  </label>

                  <div className="flex gap-3 justify-end pt-2">
                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-1.5 border border-[var(--border)] rounded-lg text-sm hover:bg-[var(--bg)] transition-colors">Cancel</button>
                    <button type="submit" disabled={saving} className="px-4 py-1.5 bg-[var(--primary)] text-[var(--primary-fg)] rounded-lg text-sm hover:opacity-90 disabled:opacity-50 transition-opacity">
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {tab === 'enquiries' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Enquiries</h2>
            {enquiries.length === 0 ? (
              <p className="text-sm text-[var(--muted-fg)]">No enquiries yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)] text-left text-[var(--muted-fg)]">
                      <th className="pb-2 pr-4">Name</th>
                      <th className="pb-2 pr-4">Phone</th>
                      <th className="pb-2 pr-4">Service</th>
                      <th className="pb-2 pr-4">Message</th>
                      <th className="pb-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((e) => (
                      <tr key={e.id} className="border-b border-[var(--border)]">
                        <td className="py-2 pr-4">{e.name}</td>
                        <td className="py-2 pr-4">{e.phone}</td>
                        <td className="py-2 pr-4">{e.service}</td>
                        <td className="py-2 pr-4 max-w-xs truncate">{e.message}</td>
                        <td className="py-2 whitespace-nowrap">{new Date(e.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'settings' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <form onSubmit={handleSettingsSave} className="max-w-lg space-y-4">
              {Object.entries(settingsForm).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm capitalize mb-1">{key.replace(/_/g, ' ')}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setSettingsForm((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-sm"
                  />
                </div>
              ))}
              <button type="submit" disabled={settingsSaving} className="px-4 py-1.5 bg-[var(--primary)] text-[var(--primary-fg)] rounded-lg text-sm hover:opacity-90 disabled:opacity-50 transition-opacity">
                {settingsSaving ? 'Saving...' : 'Save Settings'}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
