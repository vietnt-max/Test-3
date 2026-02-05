import Head from 'next/head'
import { useMemo, useState } from 'react'
import TemplateCard from '../components/TemplateCard'
import templatesData from '../data/templates'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const categories = useMemo(() => {
    const set = new Set()
    templatesData.forEach(t => (t.category || 'Uncategorized') && set.add(t.category || 'Uncategorized'))
    return ['all', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return templatesData.filter(t => {
      if (category !== 'all' && (t.category || '') !== category) return false
      if (!q) return true
      return (t.title + ' ' + (t.description || '') + ' ' + (t.tags || []).join(' ')).toLowerCase().includes(q)
    })
  }, [query, category])

  return (
    <>
      <Head>
        <title>Webtile Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <header className="header">
          <div className="title">
            <h1>Templates</h1>
            <p>Browse ready-made website templates — demo grid like Webtile</p>
          </div>

          <div className="controls">
            <input aria-label="Search templates" placeholder="Search templates, tags..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All categories' : c}</option>)}
            </select>
          </div>
        </header>

        <section className="grid">
          {filtered.map(t => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </section>

        <footer className="footer">{filtered.length} templates</footer>
      </main>

      <style jsx>{`
        .container{ max-width:1200px; margin:28px auto; padding:0 16px }
        .header{ display:flex; justify-content:space-between; gap:18px; align-items:center; margin-bottom:18px }
        .title h1{ margin:0; font-size:22px }
        .title p{ margin:6px 0 0; color:#666 }
        .controls{ display:flex; gap:10px; align-items:center }
        input{ padding:10px 12px; border-radius:8px; border:1px solid #e6e9ee; min-width:220px }
        select{ padding:10px 12px; border-radius:8px; border:1px solid #e6e9ee }
        .grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px }
        .footer{ margin-top:18px; color:#555 }
      `}</style>
    </>
  )
}
