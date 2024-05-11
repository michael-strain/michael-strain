/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx},",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend:{
      screens: {
        'xs': '576px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  },
  // plugins: [],
  // plugins: [require("@tailwindcss/typography"), require("daisyui")],
  plugins: [require('daisyui')],
  important: true,
  daisyui: {
    themes: [
      "cupcake", 
      "luxury", 
      "cyberpunk", 
      "valentine",
      "acid",
      "winter",
      "coffee",
      "lemonade",
    {
      customTheme:{
        "primary":"#a991f7",
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff"
      }
    }],
  },
}