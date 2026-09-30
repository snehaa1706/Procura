import StatusBadge from '../StatusBadge.jsx'
import { FileIcon, XIcon, ScaleIcon } from '../Icons.jsx'

export default function EvidencePanel({ requirement, onClose, onOverride }) {
  if (!requirement) {
    return (
      <div className="card flex h-full min-h-[420px] flex-col items-center justify-center p-8 text-center">
        <ScaleIcon className="h-8 w-8 text-line-strong" />
        <p className="mt-3 text-sm font-medium text-ink">Select a requirement</p>
        <p className="mt-1 text-sm text-ink-muted">
          Click any row to see the rule, extracted evidence and source reference behind the
          finding.
        </p>
      </div>
    )
  }

  const r = requirement

  return (
    <div className="card flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-line px-6 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{r.id} · {r.category}</p>
          <h3 className="mt-1 font-semibold text-ink">{r.requirement}</h3>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-ink-muted transition hover:bg-line/60 hover:text-ink lg:hidden"
          aria-label="Close"
        >
          <XIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Rule</p>
          <p className="mt-1 text-sm text-ink-secondary">{r.rule}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-xl border border-line bg-surface-plane p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Required</p>
            <p className="mt-1 text-sm font-medium text-ink">{r.required}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Found</p>
            <p className="mt-1 text-sm font-medium text-ink">{r.found}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Extracted evidence
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{r.evidence}</p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-line px-4 py-3 text-sm text-ink-secondary">
          <FileIcon className="h-4 w-4 flex-none text-ink-muted" />
          {r.source === '—' ? (
            <span>No source document located</span>
          ) : (
            <span>
              {r.source}
              {r.page ? ` · page ${r.page}` : ''}
            </span>
          )}
        </div>

        {r.overridden && (
          <div className="rounded-xl border border-accent-violet/25 bg-accent-violet/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-violet">
              Officer override recorded
            </p>
            <p className="mt-1 text-sm text-ink-secondary">"{r.overrideReason}"</p>
            <p className="mt-1 text-xs text-ink-muted">
              — {r.overriddenBy}, {r.overriddenAt}
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-line px-6 py-4">
        <div className="flex items-center justify-between">
          <StatusBadge status={r.status} />
          <button onClick={() => onOverride(r.id)} className="btn-secondary !px-4 !py-2 text-sm">
            Override finding
          </button>
        </div>
      </div>
    </div>
  )
}
