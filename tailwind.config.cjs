/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'white': '#FFF',

      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        400: '#7C7C8A',
        800: '#202024',
        900: '#121214',
      },

      cyan: {
        300: '#A5E3F9',
        500: '#81D8F7',
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
