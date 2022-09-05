/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'teal-halftone' : "url('/img/teal-halftone.jpg')",
        'matterhorn' : "url('/img/matterhorn.jpg')"
      },
      fontFamily : {
        'robotoSlab' : ['"Roboto Slab"', 'serif']
      }
    },
  },
  plugins: [],
}
