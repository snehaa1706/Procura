import StatusBadge from '../StatusBadge.jsx'
import { STATUS } from '../../data/mockData.js'
import { DownloadIcon, ClipboardCheckIcon } from '../Icons.jsx'

export default function DecisionPassport({ requirements, auditTrail, tender, blindReview }) {
  const blocking = requirements.filter(
    (r) => r.status === STATUS.FAILED || r.status === STATUS.MISSING,
  )
  const pending = requirements.filter((r) => r.status === STATUS.MANUAL_REVIEW)

  const recommendation =
    blocking.length > 0
      ? 'Not recommended as-is — blocking findings unresolved'
      : pending.length > 0
        ? 'Conditionally eligible — pending manual review items'
        : 'Eligible — all requirements satisfied'

  const recommendationColor =
    blocking.length > 0 ? '#d03b3b' : pending.length > 0 ? '#c98500' : '#0ca30c'

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Decision Passport · {tender.id}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{tender.title}</h3>
            <p className="mt-1 text-sm text-ink-secondary">
              Bidder: {blindReview ? tender.bidderLabel : tender.bidder} · Submitted{' '}
              {tender.submittedOn}
            </p>
          </div>
          <button className="btn-secondary !px-4 !py-2 text-sm">
            <DownloadIcon className="h-4 w-4" />
            Export (prototype)
          </button>
        </div>

        <div
          className="mt-6 flex items-center gap-3 rounded-xl border p-4"
          style={{ borderColor: `${recommendationColor}33`, backgroundColor: `${recommendationColor}0d` }}
        >
          <ClipboardCheckIcon className="h-5 w-5 flex-none" style={{ color: recommendationColor }} />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              System recommendation
            </p>
            <p className="text-sm font-semibold" style={{ color: recommendationColor }}>
              {recommendation}
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          This is a system-generated summary, not a final decision — the authorized procurement
          officer signs off separately below.
        </p>
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-line px-6 py-4">
          <h4 className="font-semibold text-ink">Requirement summary</h4>
        </div>
        <div className="divide-y divide-line">
          {requirements.map((r) => (
            <div key={r.id} className="flex items-center justify-between gap-4 px-6 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{r.requirement}</p>
                <p className="text-xs text-ink-muted">{r.category}</p>
              </div>
              <StatusBadge status={r.status} size="sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="border-b border-line px-6 py-4">
          <h4 className="font-semibold text-ink">Audit trail</h4>
        </div>
        {auditTrail.length === 0 ? (
          <p className="px-6 py-6 text-sm text-ink-muted">
            No overrides recorded yet. Override a finding from the Compliance View to see it
            logged here with a reason, officer name and timestamp.
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {auditTrail.map((entry, i) => (
              <li key={i} className="px-6 py-4">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{entry.officer}</span> overrode{' '}
                  <span className="font-medium">{entry.requirementId}</span> to{' '}
                  <StatusBadge status={entry.newStatus} size="sm" />
                </p>
                <p className="mt-1 text-sm text-ink-secondary">"{entry.reason}"</p>
                <p className="mt-1 text-xs text-ink-muted">{entry.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
