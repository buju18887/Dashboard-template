/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "primary": '#121417',
      "secondary": '#768692',
      "tertiary": '#2F3133'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

