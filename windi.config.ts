// @type {import('tailwindcss').Config}

import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
// import typography from 'windicss/plugin/typography'
export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  plugins: [formsPlugin],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
})