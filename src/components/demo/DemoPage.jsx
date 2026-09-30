import { useMemo, useState } from 'react'
import { initialRequirements, tender } from '../../data/mockData.js'
import StatTiles from './StatTiles.jsx'
import ComplianceTable from './ComplianceTable.jsx'
import EvidencePanel from './EvidencePanel.jsx'
import OverrideModal from './OverrideModal.jsx'
import DecisionPassport from './DecisionPassport.jsx'
import BlindReviewToggle from './BlindReviewToggle.jsx'
import { ClipboardCheckIcon, LayersIcon } from '../Icons.jsx'

const TABS = [
  { id: 'compliance', label: 'Compliance View', icon: LayersIcon },
  { id: 'passport', label: 'Decision Passport', icon: ClipboardCheckIcon },
]

export default function DemoPage() {
  const [requirements, setRequirements] = useState(initialRequirements)
  const [blindReview, setBlindReview] = useState(false)
  const [selectedId, setSelectedId] = useState(initialRequirements[0]?.id ?? null)
  const [overrideId, setOverrideId] = useState(null)
  const [auditTrail, setAuditTrail] = useState([])
  const [tab, setTab] = useState('compliance')

  const selected = useMemo(
    () => requirements.find((r) => r.id === selectedId) ?? null,
    [requirements, selectedId],
  )
  const overrideTarget = useMemo(
    () => requirements.find((r) => r.id === overrideId) ?? null,
    [requirements, overrideId],
  )

  function handleOverrideSubmit({ newStatus, reason, officer }) {
    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    setRequirements((prev) =>
      prev.map((r) =>
        r.id === overrideId
          ? {
              ...r,
              status: newStatus,
              overridden: true,
              overrideReason: reason,
              overriddenBy: officer,
              overriddenAt: timestamp,
            }
          : r,
      ),
    )
    setAuditTrail((prev) => [
      { requirementId: overrideId, newStatus, reason, officer, timestamp },
      ...prev,
    ])
    setOverrideId(null)
  }

  return (
    <div className="bg-surface-plane pb-24">
      <div className="border-b border-line bg-surface">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {tender.id} · {tender.department}
            </p>
            <h1 className="mt-1 text-xl font-semibold text-ink">{tender.title}</h1>
            <p className="mt-1 text-sm text-ink-secondary">
              Bidder: {blindReview ? tender.bidderLabel : tender.bidder} · Submitted{' '}
              {tender.submittedOn}
            </p>
          </div>
          <BlindReviewToggle enabled={blindReview} onChange={setBlindReview} />
        </div>

        <div className="container-page flex gap-1 pb-0">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition ${
                tab === id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-ink-secondary hover:text-ink'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-page mt-8">
        {tab === 'compliance' ? (
          <div className="space-y-6">
            <StatTiles requirements={requirements} />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
              <ComplianceTable
                requirements={requirements}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
              <div className="lg:sticky lg:top-24 lg:self-start">
                <EvidencePanel
                  requirement={selected}
                  onClose={() => setSelectedId(null)}
                  onOverride={setOverrideId}
                />
              </div>
            </div>
          </div>
        ) : (
          <DecisionPassport
            requirements={requirements}
            auditTrail={auditTrail}
            tender={tender}
            blindReview={blindReview}
          />
        )}
      </div>

      {overrideTarget && (
        <OverrideModal
          requirement={overrideTarget}
          onClose={() => setOverrideId(null)}
          onSubmit={handleOverrideSubmit}
        />
      )}
    </div>
  )
}
