/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        style: ['poppins', 'sans-serif'],
        'playfair': ['Playfair', 'serif'],
      },
      fontSize: {
        mainFontSize: '16px',
        medium: '19px',
        large: '36px',
        bigFontSize: '56px'
      },
      textColor: {
        main: '#ededed'
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      colors: {
        'main-color': '#081b29',
        'primary-color': '#00abf0',
        'solid' : '#222'
      },
      width: {
        'main-button-width': '150px'
      },
      borderRadius: {
        'main-radius': '8px',
        'circle':  'rounded-full'
      }
    },
  },
  plugins: [],
}
