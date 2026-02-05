export default function TemplateCard({ template }) {
  return (
    <a className="card" href={template.url} target="_blank" rel="noreferrer">
      <div className="thumb">
        <img src={template.image} alt={template.title} />
      </div>
      <div className="meta">
        <h3>{template.title}</h3>
        <p className="desc">{template.description}</p>
        <div className="tags">
          {template.tags && template.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card { display:block; border-radius:8px; padding:12px; background:#fff; color:#111; text-decoration:none; box-shadow:0 6px 18px rgba(15,23,42,0.06); transition:transform .12s ease, box-shadow .12s ease; }
        .card:hover{ transform:translateY(-6px); box-shadow:0 18px 40px rgba(15,23,42,0.09); }
        .thumb{ height:140px; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:6px; background:linear-gradient(180deg,#fafafa,#f0f0f0); }
        .thumb img{ width:100%; height:100%; object-fit:cover }
        .meta{ padding-top:10px }
        h3{ margin:0 0 6px; font-size:16px; font-weight:600 }
        .desc{ margin:0; color:#666; font-size:13px }
        .tags{ margin-top:10px; display:flex; gap:6px; flex-wrap:wrap }
        .tag{ background:#f1f5f9; color:#0f172a; padding:4px 8px; border-radius:999px; font-size:12px }
      `}</style>
    </a>
  )
}
