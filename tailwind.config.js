module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
     'cursive':['"Libre Baskerville"', 'serif']
    },
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/header.png')",
       
      },
      boxShadow: {
        '3xl': '10px -10px  #186FCC',
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}