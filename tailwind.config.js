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
        'light-purple': '#8964b0',
        'lighter-purple': '#a18aba',
        'dark-purple': '#1b082f',
        'darker-purple': '#140524',
        'slate-white': '#ebe7ef',
      }
    },
  },
  plugins: [],
}

