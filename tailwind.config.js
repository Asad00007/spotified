/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D8E00",
        secondary: "#393939",
        secondaryFifty: "#999a9b",
        buttonPrimary: "#EA7A9A",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        "feature-cardbg": "url('/src/assets/img/cardBg.png')",
      },
      screens: {
        "md-1200": "1200px",
        "md-1000": "1000px",
        "md-800": "800px",
        "sm-700": "700px",
        "sm-550": "550px",
        "lg-1300": "1300px",
        "lg-1350": "1350px",
        "md-1100": "1100px",
        "md-1190": "1190px",
        "md-950": "950px",
        "xs-500": "500px",
        "lg-1500": "1500px",
        "lg-1780": "1780px",
      },
    },
  },
  plugins: [],
};
