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
        'open-sans' : ["'Open Sans'", 'sans-serif'],
        'playfair' : ["'Playfair Display'", 'serif'],
        'roboto-mono' : ["'Roboto Mono'", 'monospace'],
        'abril' : ["'Abril Fatface'", 'cursive']
      }
    },
  },
  plugins: [],
}
