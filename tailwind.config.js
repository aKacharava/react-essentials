/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Quicksand'],
      'secondary': ['"Roboto Condensed"'],
    },
    extend: {
      colors: {
        'primary': '#8964b0'
      }
    },
  },
  plugins: [],
}

