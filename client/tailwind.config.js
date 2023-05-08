/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F4F2F3',
        'second':'#c0a9bd', 
        'three': '#94A7AE',
        'green': '#64766A',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
