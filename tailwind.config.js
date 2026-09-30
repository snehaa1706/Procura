/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0b0b',
          secondary: '#52514e',
          muted: '#898781',
        },
        surface: {
          DEFAULT: '#fcfcfb',
          plane: '#f9f9f7',
        },
        line: {
          DEFAULT: '#e1e0d9',
          strong: '#c3c2b7',
        },
        brand: {
          light: '#cde2fb',
          DEFAULT: '#2a78d6',
          dark: '#184f95',
          ink: '#0d366b',
        },
        accent: {
          violet: '#4a3aa7',
          aqua: '#1baf7a',
        },
        status: {
          good: '#0ca30c',
          warning: '#fab219',
          serious: '#ec835a',
          critical: '#d03b3b',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,11,11,0.06), 0 1px 1px rgba(11,11,11,0.04)',
        popover: '0 12px 32px rgba(11,11,11,0.18)',
      },
    },
  },
  plugins: [],
}
