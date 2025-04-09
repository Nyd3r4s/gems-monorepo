import { resolve } from 'path'

export default defineNuxtConfig({
  css: ['./src/style.css', resolve(__dirname, '../gems-components/src/style.css')],
  alias: {
    '@gems-components': resolve(__dirname, '../gems-components/src'),
    '@': resolve(__dirname, '../gems-mfe/src'),
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  build: {
    transpile: ['gems-components'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-04-08',
})