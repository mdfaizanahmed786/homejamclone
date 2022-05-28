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
       
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}