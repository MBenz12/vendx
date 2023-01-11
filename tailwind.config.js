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
    screens: {
			'2xl': { max: '1920px' },
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '575px' },
		},
    extend: {},
  },
  plugins: [],
}