const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
    colors: {
      gray: '#E2E8F0'
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
   outline: false,
  },
  plugins: [],
}
