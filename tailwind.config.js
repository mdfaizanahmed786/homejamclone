module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/header.png')",
       
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}