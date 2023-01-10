/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Rubik'],
      'title': ['Akira Expanded'],
      'secondary': ['Space Grotesk'],
    },
    colors: {
      'primary': '#FFE80B',
      'secondary': '#777777',
      'white': '#fff',
      'black': '#000'
    },
    extend: {},
  },
  plugins: [],
}