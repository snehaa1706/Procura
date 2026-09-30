import { CheckCircleIcon, XCircleIcon, AlertIcon, HelpCircleIcon } from './Icons.jsx'
import { STATUS, STATUS_META } from '../data/mockData.js'

const ICONS = {
  [STATUS.VERIFIED]: CheckCircleIcon,
  [STATUS.FAILED]: XCircleIcon,
  [STATUS.MISSING]: AlertIcon,
  [STATUS.MANUAL_REVIEW]: HelpCircleIcon,
}

export default function StatusBadge({ status, size = 'md' }) {
  const meta = STATUS_META[status]
  const Icon = ICONS[status]
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ${padding}`}
      style={{ color: meta.color, backgroundColor: meta.soft }}
    >
      <Icon className="h-3.5 w-3.5" />
      {meta.label}
    </span>
  )
}
