import { ArrowRightIcon, ShieldIcon, CpuIcon, ClipboardCheckIcon } from '../Icons.jsx'

const STATS = [
  { icon: CpuIcon, label: '2 specialised AI agents', sub: 'Tender reading + evidence extraction' },
  { icon: ShieldIcon, label: 'Deterministic rule engine', sub: 'Objective, code-based verification' },
  { icon: ClipboardCheckIcon, label: 'Full audit trail', sub: 'Every decision is traceable' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #3987e5 0, transparent 35%), radial-gradient(circle at 85% 0%, #9085e9 0, transparent 40%)',
        }}
      />
      <div className="container-page relative py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
          SIH 2026 · Problem Statement 26100 · Team Error 404
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          From tender documents to{' '}
          <span className="bg-gradient-to-r from-brand to-accent-aqua bg-clip-text text-transparent">
            trusted decisions
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Procura is an AI-powered bid compliance verification platform for government
          procurement. It reads tender requirements, checks them against bidder evidence, and
          gives procurement officers explainable, evidence-backed, audit-ready findings — without
          taking the decision away from them.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#/demo" className="btn-primary">
            View live demo
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
          {STATS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/10 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-sm font-semibold text-white">{label}</dt>
                <dd className="text-sm text-white/55">{sub}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
