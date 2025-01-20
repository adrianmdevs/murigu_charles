/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        baloo : "'Baloo Da 2'"
      },
      colors:{
        primary : {
          light: '#7c3aed',
          DEFAULT: '#6b21a8',
          dark: '#581c87',
        },
        secondary :{
          light : '#345899',
          default : '#10b981',
          dark : '#059699',
        },
        customGray : '#1e293b',
        customDark : '#433211',
        customMain: '#fffff'
    },
    fontSize: {
      'main-Heading':['48px',{lineHeight: '56px'}],
      'mainHeading-mobile' : ['36px',{lineHeight: '44px'}],
      'secondary-heading-mobile': ['28px', { lineHeight: '36px' }],
        'text-heading': ['24px', { lineHeight: '32px' }],
        'body-text': ['18px', { lineHeight: '28px' }],
        'small-text': ['14px', { lineHeight: '20px' }],
    }
  },
  plugins: [],
}
}
