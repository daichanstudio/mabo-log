module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main':'#669933',
        'sub':'#FFFFBB',
        'sub2': '#4F6457',
        'base':'#FFFEF6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
