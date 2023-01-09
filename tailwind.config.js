/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "900px",
    },
    backgroundImage: {
      desktop: "url('/src/image/home/background-home-desktop.jpg')",
      mobile: "url('/src/image/home/background-home-mobile.jpg')",
      tablet: "url('/src/image/home/background-home-tablet.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
