const REFERENCES = [
  { label: 'Government e-Marketplace — Government of India', href: 'https://gem.gov.in' },
  { label: 'General Financial Rules 2017 — Ministry of Finance', href: 'https://dea.gov.in/gfr' },
  { label: 'Manual for Procurement of Goods — Department of Expenditure', href: 'https://doe.gov.in' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-xs font-bold text-brand">
                P
              </span>
              Procura
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-secondary">
              From tender documents to trusted decisions. Built for Smart India Hackathon 2026,
              Problem Statement 26100, by Team Error 404.
            </p>
            <p className="mt-3 max-w-sm text-xs text-ink-muted">
              Intended stack: React + Tailwind, FastAPI, PostgreSQL + pgvector, Gemini 2.5 Flash,
              LangGraph. This repo is the frontend only.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              References
            </p>
            <ul className="mt-3 space-y-1.5">
              {REFERENCES.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-secondary underline decoration-line underline-offset-4 transition hover:text-brand"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Team Error 404 · SIH Problem Statement 26100</p>
          <p>Prototype for demonstration — not connected to a live procurement portal.</p>
        </div>
      </div>
    </footer>
  )
}
