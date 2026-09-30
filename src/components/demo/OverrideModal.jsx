import { useState } from 'react'
import { STATUS, STATUS_META } from '../../data/mockData.js'
import { XIcon } from '../Icons.jsx'

const OPTIONS = [STATUS.VERIFIED, STATUS.FAILED, STATUS.MISSING, STATUS.MANUAL_REVIEW]

export default function OverrideModal({ requirement, onClose, onSubmit }) {
  const [newStatus, setNewStatus] = useState(requirement.status)
  const [reason, setReason] = useState('')
  const [officer, setOfficer] = useState('')

  const canSubmit = reason.trim().length > 4 && officer.trim().length > 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-surface shadow-popover">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h3 className="font-semibold text-ink">Override finding — {requirement.id}</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-muted transition hover:bg-line/60 hover:text-ink"
            aria-label="Close"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-5 px-6 py-5">
          <p className="text-sm text-ink-secondary">{requirement.requirement}</p>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              New status
            </p>
            <div className="grid grid-cols-2 gap-2">
              {OPTIONS.map((opt) => {
                const meta = STATUS_META[opt]
                const active = newStatus === opt
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setNewStatus(opt)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition ${
                      active ? 'border-brand ring-1 ring-brand' : 'border-line hover:border-ink-muted'
                    }`}
                    style={active ? { color: meta.color } : undefined}
                  >
                    {meta.label}
                  </button>
                )
              })}
            </div>
          </div>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Reason for override
            </span>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder="e.g. Verified the second experience certificate against the client directly by phone on 27-Sep-2026."
              className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Officer name
            </span>
            <input
              value={officer}
              onChange={(e) => setOfficer(e.target.value)}
              placeholder="e.g. R. Sharma, Procurement Officer"
              className="mt-1.5 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </label>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-line px-6 py-4">
          <button onClick={onClose} className="btn-secondary !px-4 !py-2 text-sm">
            Cancel
          </button>
          <button
            disabled={!canSubmit}
            onClick={() => onSubmit({ newStatus, reason: reason.trim(), officer: officer.trim() })}
            className="btn-primary !px-4 !py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            Record override
          </button>
        </div>
      </div>
    </div>
  )
}
