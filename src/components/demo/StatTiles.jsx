import { STATUS, STATUS_META } from '../../data/mockData.js'
import { CheckCircleIcon, XCircleIcon, AlertIcon, HelpCircleIcon } from '../Icons.jsx'

const ORDER = [STATUS.VERIFIED, STATUS.FAILED, STATUS.MISSING, STATUS.MANUAL_REVIEW]
const ICONS = {
  [STATUS.VERIFIED]: CheckCircleIcon,
  [STATUS.FAILED]: XCircleIcon,
  [STATUS.MISSING]: AlertIcon,
  [STATUS.MANUAL_REVIEW]: HelpCircleIcon,
}

export default function StatTiles({ requirements }) {
  const counts = ORDER.map((status) => ({
    status,
    count: requirements.filter((r) => r.status === status).length,
  }))
  const total = requirements.length

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {counts.map(({ status, count }) => {
        const meta = STATUS_META[status]
        const Icon = ICONS[status]
        return (
          <div key={status} className="card p-5">
            <div className="flex items-center justify-between">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ color: meta.color, backgroundColor: meta.soft }}
              >
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-xs font-medium text-ink-muted">
                {total ? Math.round((count / total) * 100) : 0}%
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold text-ink">{count}</p>
            <p className="text-sm text-ink-secondary">{meta.label}</p>
          </div>
        )
      })}
    </div>
  )
}
