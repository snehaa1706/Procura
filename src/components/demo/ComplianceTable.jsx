import StatusBadge from '../StatusBadge.jsx'
import { ChevronRightIcon } from '../Icons.jsx'

export default function ComplianceTable({ requirements, selectedId, onSelect }) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] table-fixed text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wide text-ink-muted">
              <th className="px-5 py-3 font-semibold">Requirement</th>
              <th className="w-28 px-5 py-3 font-semibold">Category</th>
              <th className="w-40 px-3 py-3 font-semibold">Status</th>
              <th className="w-9 px-3 py-3" />
            </tr>
          </thead>
          <tbody>
            {requirements.map((r) => {
              const active = r.id === selectedId
              return (
                <tr
                  key={r.id}
                  onClick={() => onSelect(r.id)}
                  className={`cursor-pointer border-b border-line last:border-0 transition ${
                    active ? 'bg-brand-light/40' : 'hover:bg-surface-plane'
                  }`}
                >
                  <td className="px-5 py-4">
                    <p className="flex flex-wrap items-center gap-2 font-medium text-ink">
                      {r.requirement}
                      {r.overridden && (
                        <span className="rounded bg-accent-violet/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-violet">
                          Overridden
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      {r.id} · required {r.required}, found {r.found}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-ink-secondary">{r.category}</td>
                  <td className="whitespace-nowrap px-3 py-4">
                    <StatusBadge status={r.status} size="sm" />
                  </td>
                  <td className="px-3 py-4 text-ink-muted">
                    <ChevronRightIcon className="h-4 w-4" />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
