/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "900px",
    },
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        desktop: "url('/src/image/background-destination-desktop.jpg')",
        mobile: "url('/src/image/background-destination-mobile.jpg')",
      },
      colors: {
        "header-bg": "#ffffff0a",
      },
    },
  },
  plugins: [],
};
