// Small, dependency-free inline SVG icon set. Keeping icons hand-rolled
// avoids pulling in an icon library the build doesn't otherwise need.
// All icons inherit color via `currentColor`, so class="text-*" controls them.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {children}
    </svg>
  )
}

export const CheckCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.3 2.3L15.5 9.5" />
  </Svg>
)

export const XCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m9.5 9.5 5 5m0-5-5 5" />
  </Svg>
)

export const AlertIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
    <path d="M12 10v4" />
    <circle cx="12" cy="16.8" r="0.15" fill="currentColor" stroke="none" />
  </Svg>
)

export const HelpCircleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.3a2.5 2.5 0 1 1 3.6 2.25c-.7.35-1.1.75-1.1 1.45v.3" />
    <circle cx="12" cy="16.8" r="0.15" fill="currentColor" stroke="none" />
  </Svg>
)

export const FileIcon = (p) => (
  <Svg {...p}>
    <path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
    <path d="M14 3.5V8h4" />
    <path d="M9 12.5h6M9 15.8h6M9 9.2h2" />
  </Svg>
)

export const ShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 5 6v6c0 4.6 3 7.6 7 8.8 4-1.2 7-4.2 7-8.8V6l-7-2.8Z" />
    <path d="m9 12 2 2 4-4.2" />
  </Svg>
)

export const CpuIcon = (p) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 5l-2 2M5 19l2-2M17 19l-2-2" />
  </Svg>
)

export const DatabaseIcon = (p) => (
  <Svg {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="2.6" />
    <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
    <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
  </Svg>
)

export const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h15" />
    <path d="M13.5 6.5 19 12l-5.5 5.5" />
  </Svg>
)

export const EyeIcon = (p) => (
  <Svg {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.7" />
  </Svg>
)

export const EyeOffIcon = (p) => (
  <Svg {...p}>
    <path d="M3.5 3.5 20.5 20.5" />
    <path d="M9.9 5.1A10.9 10.9 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a15.6 15.6 0 0 1-3.2 3.9M6.6 6.6C4 8.3 2.5 11 2.5 12s3.5 6.5 9.5 6.5c1.1 0 2.1-.15 3-.42" />
    <path d="M9.6 10.2a2.7 2.7 0 0 0 3.9 3.75" />
  </Svg>
)

export const ClipboardCheckIcon = (p) => (
  <Svg {...p}>
    <rect x="6" y="4.5" width="12" height="16" rx="1.5" />
    <path d="M9.5 4.5V3.8c0-.5.4-.9.9-.9h3.2c.5 0 .9.4.9.9v.7" />
    <path d="m9.3 13 2 2 3.4-3.6" />
  </Svg>
)

export const LayersIcon = (p) => (
  <Svg {...p}>
    <path d="m12 3.5 8.5 4.3L12 12l-8.5-4.2L12 3.5Z" />
    <path d="m3.5 12 8.5 4.3 8.5-4.3" />
    <path d="m3.5 15.8 8.5 4.3 8.5-4.3" />
  </Svg>
)

export const BranchIcon = (p) => (
  <Svg {...p}>
    <circle cx="6" cy="5.5" r="2" />
    <circle cx="6" cy="18.5" r="2" />
    <circle cx="18" cy="12" r="2" />
    <path d="M6 7.5v9" />
    <path d="M6 8.5c0 4 4 4.5 10 3.5" />
  </Svg>
)

export const SearchIcon = (p) => (
  <Svg {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m19.5 19.5-4.3-4.3" />
  </Svg>
)

export const ScaleIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v18M8 21h8" />
    <path d="M12 5.5 5 7.5m7-2 7 2" />
    <path d="M5 7.5 2.5 13a2.7 2.7 0 0 0 5 0L5 7.5Z" />
    <path d="M19 7.5 16.5 13a2.7 2.7 0 0 0 5 0L19 7.5Z" />
  </Svg>
)

export const LockIcon = (p) => (
  <Svg {...p}>
    <rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5" />
    <path d="M8.5 10.5V8a3.5 3.5 0 1 1 7 0v2.5" />
  </Svg>
)

export const XIcon = (p) => (
  <Svg {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Svg>
)

export const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
)

export const DownloadIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3.5v11.5m0 0 4-4m-4 4-4-4" />
    <path d="M5 17.5v2a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-2" />
  </Svg>
)
