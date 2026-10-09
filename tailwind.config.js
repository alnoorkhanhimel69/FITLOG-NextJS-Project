/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0f",
        panel: "#15171d",
        line: "#252832",
        lime: "#ccff00"
      },
      fontFamily: {
        display: ["Arial Narrow", "Impact", "sans-serif"]
      }
    },
  },
  plugins: [],
};
