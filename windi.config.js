/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  shortcuts: {
    '':'' //Can set things globally here, example below
    // 'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md'
  },
  plugins: [],
}
