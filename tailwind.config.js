/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        purple:""
      },
      screens: {
        '2xl': {'min': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'min': '1023px'},
        'md': {'min': '767px'},
        'sm': {'min': '639px'},
        'xs':{'max':'350px'},
        'xsm':{'max':'767px'}
      }
    },
  },
  plugins: [],
}

