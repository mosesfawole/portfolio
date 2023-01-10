/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "900px",
    },

    extend: {
      backgroundImage: {
        desktop: "url('/src/image/background-destination-desktop.jpg')",
        mobile: "url('/src/image/background-destination-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
