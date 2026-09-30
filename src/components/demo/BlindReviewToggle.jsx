import { EyeIcon, EyeOffIcon } from '../Icons.jsx'

export default function BlindReviewToggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
        enabled
          ? 'border-accent-violet/30 bg-accent-violet/10 text-accent-violet'
          : 'border-line bg-surface text-ink-secondary hover:border-ink-muted'
      }`}
      aria-pressed={enabled}
    >
      {enabled ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
      Blind review {enabled ? 'on' : 'off'}
    </button>
  )
}
