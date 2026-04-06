/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFAF5',
        beige: '#F0E5D0',
        sand: '#D4B896',
        wood: '#8B5E3C',
        bark: '#3E2111',
        olive: '#5C6B4A',
        'olive-light': '#8A9B78',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}
