// Sample data illustrating what Procura's compliance engine produces once a
// tender rulebook has been checked against a bidder's submitted evidence.
// Everything here is fictional — built to demonstrate the interaction model,
// not a real tender.

export const tender = {
  id: 'GEM/2026/B/000482',
  title: 'Supply & Commissioning of Ruggedized Field Laptops',
  department: 'Directorate of Rural Digital Infrastructure',
  bidder: 'Skyline Digital Systems Pvt. Ltd.',
  bidderLabel: 'Bidder A',
  submittedOn: '2026-08-14',
}

export const STATUS = {
  VERIFIED: 'verified',
  FAILED: 'failed',
  MISSING: 'missing',
  MANUAL_REVIEW: 'manual_review',
}

export const STATUS_META = {
  [STATUS.VERIFIED]: { label: 'Verified', color: '#0ca30c', soft: '#e9f8e9' },
  [STATUS.FAILED]: { label: 'Failed', color: '#d03b3b', soft: '#fbebeb' },
  [STATUS.MISSING]: { label: 'Missing', color: '#ec835a', soft: '#fdf0ea' },
  [STATUS.MANUAL_REVIEW]: { label: 'Manual Review', color: '#c98500', soft: '#fdf3de' },
}

export const initialRequirements = [
  {
    id: 'REQ-01',
    category: 'Technical',
    requirement: 'Minimum system memory of 16 GB RAM per unit',
    rule: 'Clause 4.2(a) — RAM ≥ 16 GB',
    required: '≥ 16 GB RAM',
    found: '8 GB RAM',
    status: STATUS.FAILED,
    evidence:
      'Technical Compliance Sheet states "8GB DDR4 RAM (expandable to 16GB)" against the mandatory minimum of 16GB installed at delivery.',
    source: 'Technical_Compliance_Sheet.pdf',
    page: 4,
  },
  {
    id: 'REQ-02',
    category: 'Identity',
    requirement: 'Valid GSTIN matching bidder\'s registered legal name',
    rule: 'Clause 2.1 — Valid GSTIN required, format & name must match PAN',
    required: 'Format-valid GSTIN, name match',
    found: 'GSTIN 07AACCS1234F1Z5 — name matches',
    status: STATUS.VERIFIED,
    evidence:
      'GSTIN format validated (state code, PAN segment, checksum) and legal name "Skyline Digital Systems Pvt. Ltd." matches PAN and incorporation certificate.',
    source: 'GST_Registration_Certificate.pdf',
    page: 1,
  },
  {
    id: 'REQ-03',
    category: 'Financial',
    requirement: 'Average annual turnover ≥ ₹5 Crore over last 3 financial years',
    rule: 'Clause 3.3 — Turnover ≥ ₹5 Cr average (FY23–FY25)',
    required: '≥ ₹5.0 Cr average',
    found: '₹7.2 Cr average',
    status: STATUS.VERIFIED,
    evidence:
      'CA-certified turnover statement lists ₹6.4 Cr (FY23), ₹7.1 Cr (FY24), ₹8.1 Cr (FY25) — average ₹7.2 Cr, exceeds threshold.',
    source: 'CA_Certified_Turnover_Statement.pdf',
    page: 2,
  },
  {
    id: 'REQ-04',
    category: 'Eligibility',
    requirement: 'Valid ISO 9001:2015 Quality Management certification',
    rule: 'Clause 2.4 — ISO 9001:2015 certificate, unexpired',
    required: 'Unexpired ISO 9001:2015 certificate',
    found: 'Not located in submission',
    status: STATUS.MISSING,
    evidence:
      'No ISO 9001:2015 certificate was found among the 14 documents submitted. Bidder may have included it under an unlabelled scanned annexure — flagged for officer verification.',
    source: '—',
    page: null,
  },
  {
    id: 'REQ-05',
    category: 'Eligibility',
    requirement: 'At least 2 similar completed contracts in last 5 years',
    rule: 'Clause 2.6 — ≥ 2 completed contracts of similar scale/nature',
    required: '≥ 2 similar contracts',
    found: '1 clear match, 1 ambiguous',
    status: STATUS.MANUAL_REVIEW,
    evidence:
      'Completion certificate for "State Education Dept. — 4,200 units" clearly matches. A second document references "field device rollout, phase II" without unit count or explicit device category — needs officer judgement on similarity.',
    source: 'Experience_Certificates.pdf',
    page: 9,
  },
  {
    id: 'REQ-06',
    category: 'Documentary',
    requirement: 'Earnest Money Deposit (EMD) submitted',
    rule: 'Clause 5.1 — EMD of ₹2,00,000 via BG or DD',
    required: 'EMD instrument ≥ ₹2,00,000',
    found: 'DD for ₹2,00,000',
    status: STATUS.VERIFIED,
    evidence: 'Demand draft No. 004821 dated 12-Aug-2026 for ₹2,00,000 drawn in favour of the tendering authority.',
    source: 'EMD_Demand_Draft.pdf',
    page: 1,
  },
  {
    id: 'REQ-07',
    category: 'Technical',
    requirement: 'Minimum 3-year comprehensive on-site warranty',
    rule: 'Clause 4.6 — Warranty ≥ 3 years, on-site, comprehensive',
    required: '≥ 3 years on-site',
    found: '3 years on-site, comprehensive',
    status: STATUS.VERIFIED,
    evidence: 'Warranty undertaking confirms "3 years on-site comprehensive warranty including accidental damage".',
    source: 'Warranty_Undertaking.pdf',
    page: 1,
  },
  {
    id: 'REQ-08',
    category: 'Identity',
    requirement: 'Company incorporation predates tender publication by ≥ 3 years',
    rule: 'Clause 2.2 — Incorporated on or before 01-Jan-2023',
    required: 'Incorporated ≤ 01-Jan-2023',
    found: 'Incorporated 18-Mar-2019',
    status: STATUS.VERIFIED,
    evidence: 'Certificate of Incorporation date (18-Mar-2019) is consistent across MCA certificate, PAN and GST records.',
    source: 'Certificate_of_Incorporation.pdf',
    page: 1,
  },
  {
    id: 'REQ-09',
    category: 'Documentary',
    requirement: 'Authorized signatory name consistent across all forms',
    rule: 'Clause 6.1 — Power of Attorney holder must sign all bid forms',
    required: 'Consistent signatory identity',
    found: 'Name mismatch detected',
    status: STATUS.MANUAL_REVIEW,
    evidence:
      'Power of Attorney names "Rohan A. Mehta" as authorized signatory; Bid Form Annexure-3 is signed "R. A. Mehta". Likely the same person, but exact string match failed — flagged rather than auto-accepted.',
    source: 'Power_of_Attorney.pdf',
    page: 2,
  },
  {
    id: 'REQ-10',
    category: 'Technical',
    requirement: 'IP54-rated ruggedized chassis',
    rule: 'Clause 4.1 — Minimum IP54 ingress protection rating',
    required: 'IP54 or higher',
    found: 'IP54 (test report attached)',
    status: STATUS.VERIFIED,
    evidence: 'Third-party lab test report certifies IP54 rating under IEC 60529 for the offered model.',
    source: 'Lab_Test_Report_IP_Rating.pdf',
    page: 3,
  },
]
