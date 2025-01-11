/** @type {import('tailwindcss').Config} */
module.exports = {
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
          light: '674567'
        },
        secondary :{
          light : '#345899',
          default : '#10b981',
          dark : '#059699'
        },
        background : '#1e293b'
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
