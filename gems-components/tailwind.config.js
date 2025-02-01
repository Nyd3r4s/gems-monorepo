/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../gems-mfe/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        hover: 'var(--text-hover)',
      },
      border: {
        color: 'var(--border-color)',
        hover: 'var(--border-hover)',
      },
    },
  },
  plugins: [],
}
