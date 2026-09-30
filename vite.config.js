import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base so the build works when opened directly or deployed
// under a sub-path (e.g. GitHub Pages project sites). If you deploy to
// Vercel/Netlify at the domain root, base can be left as '/' instead — see
// README.md for deployment notes.
export default defineConfig({
  plugins: [react()],
  base: './',
})
