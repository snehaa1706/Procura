import {
  FileIcon,
  CpuIcon,
  LockIcon,
  SearchIcon,
  ScaleIcon,
  ClipboardCheckIcon,
  ArrowRightIcon,
} from '../Icons.jsx'

const NODES = [
  { icon: FileIcon, title: 'Tender documents', text: 'Clauses, eligibility, specs, mandatory docs' },
  { icon: CpuIcon, title: 'Tender AI agent', text: 'Extracts requirements into structured rules' },
  { icon: LockIcon, title: 'Locked compliance rules', text: 'The common bar every bidder is checked against' },
  { icon: SearchIcon, title: 'Bid evidence agent', text: 'Extracts facts, links evidence to requirements' },
  { icon: ScaleIcon, title: 'Deterministic engine', text: 'Compares evidence with rules, flags contradictions' },
  { icon: ClipboardCheckIcon, title: 'Dashboard → review → passport', text: 'Officer decides; the record is auditable' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="section-pad bg-surface">
      <div className="container-page">
        <span className="eyebrow">How it works</span>
        <h2 className="section-heading mt-4">Every bidder checked against the same locked rules</h2>
        <p className="section-sub">
          The tender is read once and converted into a structured compliance rulebook. AI does the
          reading; a deterministic engine does the comparing — so results are consistent and every
          finding traces back to a document and a page.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-3">
          {NODES.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex items-center gap-3 lg:flex-col lg:items-stretch lg:gap-0">
              <div className="card flex-1 p-5 lg:p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-ink">{title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink-secondary">{text}</p>
              </div>
              {i < NODES.length - 1 && (
                <div className="flex flex-none items-center justify-center px-1 text-line-strong lg:my-2 lg:rotate-90">
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl border border-line bg-surface-plane p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-ink-secondary">
            Want to see it decide something? The live demo has a real compliance table, evidence
            panel, an officer override flow and an auditable decision passport — all with sample
            bidder data.
          </p>
          <a href="#/demo" className="btn-primary flex-none">
            Open the live demo
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
