/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueblack': '#0e1010',
        'bluegray': '#2b2f2f',
        'blueash': '#555f5f',
        'bluewhite': '#E2FCFC'
      },
    }
  },
  plugins: [],
}
