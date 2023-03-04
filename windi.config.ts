// @type {import('tailwindcss').Config}

// module.exports = {
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./nuxt.config.{js,ts}",
//     "./app.vue"
//   ]
//   // theme: {
//   //   extend: {}
//   // },
//   // shortcuts: {
//   //   '':'' //Can set things globally here, example below
//   //   // 'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md'
//   // },
//   // plugins: []
// }

import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
// import typography from 'windicss/plugin/typography'
export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
        tertiary: '#FFD700',
        quaternary: '#FF1493',
        quinary: '#FF4500',
        senary: '#FF8C00',
        septenary: '#FFA500',
        octonary: '#FFD700',
        nonary: '#FFDAB9',
        denary: '#FFDEAD',
      }
    }
  },
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