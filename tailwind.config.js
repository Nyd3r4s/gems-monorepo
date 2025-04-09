/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // ... rest of your config
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    '../gems-components/src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 