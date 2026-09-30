# Procura — Frontend

**From Tender Documents to Trusted Decisions.**

Frontend for **Procura**, an AI-powered bid compliance verification platform for government
procurement — built for **Smart India Hackathon 2026, Problem Statement 26100**, by **Team Error
404**.

This is a two-page site, kept deliberately short — the deck already covers the pitch, so the
frontend's job is to be a live link people can click into, not a second copy of the slides:

- **`/`** — a short overview: hero (what Procura is, one line), a single "how it works" section
  with the six-node pipeline diagram, and a CTA straight into the demo.
- **`/#/demo`** — the actual working prototype: stat tiles, a compliance requirements table with
  mock bidder evidence, an evidence side-panel (rule, extracted evidence, source doc + page), a
  Blind Review toggle, an officer override flow with a recorded reason, and a Decision Passport
  summary with an audit trail. This is the part worth spending demo time on.

All bidder/tender data in the demo (`src/data/mockData.js`) is fictional, built to demonstrate the
interaction model described in the project brief.

## Stack

React 18 + Vite + Tailwind CSS. No backend, no external API calls, no icon library — icons are
small hand-rolled inline SVGs in `src/components/Icons.jsx`, and routing between the two pages is
a minimal hash-based switch in `src/App.jsx` (no react-router dependency).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. The demo dashboard lives at the `/demo` hash route — from the
running dev server that's `http://localhost:5173/#/demo`, or just click "View live demo" in the
nav.

To build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The build output lands in `dist/`.

## Deploying so you can link it from your PPT

Any static host works since this is a plain Vite build with no server-side code.

- **Vercel / Netlify (recommended, easiest):** import the GitHub repo, framework preset "Vite",
  build command `npm run build`, output directory `dist`. No config changes needed — you'll get a
  URL to drop straight into your slides.
- **GitHub Pages:** enable Pages for the repo (Settings → Pages → "GitHub Actions", or serve from
  a `gh-pages` branch). `vite.config.js` already uses `base: './'` (relative asset paths), so a
  build dropped into a project-site subpath (`username.github.io/repo-name/`) should load
  correctly. If you see blank assets after deploying, double-check the Pages source is pointing at
  the `dist/` output.

## Project structure

```
src/
  App.jsx                  # hash-based routing between the two pages
  components/
    Nav.jsx                # shared top nav
    Icons.jsx               # inline SVG icon set
    StatusBadge.jsx          # shared Verified/Failed/Missing/Manual Review badge
    landing/                 # every section of the overview page
    demo/                    # the compliance dashboard prototype
  data/mockData.js           # sample tender + bidder evidence used by the demo
```

## Notes for the SIH submission

- The tech-stack, architecture and workflow sections reflect the intended production
  architecture (FastAPI + PostgreSQL + pgvector + Gemini 2.5 Flash + LangGraph, etc.) — this
  repo is the **frontend only**; none of that backend is implemented here.
- The references listed in the footer are as given in the project brief; verify exact titles/
  editions before citing them in the final deck.
