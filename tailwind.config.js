/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '120': '120px',
      },
      colors: {
        'botao-preto': '#0D0F12'
      }
    },
  },
  plugins: [],
}

