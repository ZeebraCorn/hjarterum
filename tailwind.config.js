/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'playfair': ['"Playfair Display', 'ui-serif'],
      'lato': ['Lato', 'ui-sans-serif']
    },
    extend: {
      colors: {
        'dark-beige': '#86694F',
        'light-beige': '#AC9689',
        'lighter-beige': '#ADA198',
        'whiteish': '#FEF7F5',
        'light-pink': '#FCD5CE',
        'dark-pink': '#FFB5A7',
        'whiteish-opacity-50': '#FFFBFA',
        'light-pink-opacity': '#FDE8E4'
      }
    },
  },
  plugins: [],
}

