const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
    colors: {      
      brand: {
        DEFAULT: '#1e293b',
      },
      warn: {
        DEFAULT: '#f59e0b',
      },
      gray: {
        DEFAULT: '#E2E8F0',
      },
      link: {
        DEFAULT: '#0ea5e9',
      },
      mark: {
        DEFAULT: '#ff4582',
      },
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
