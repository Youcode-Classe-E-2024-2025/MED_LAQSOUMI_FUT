/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/script.js"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        dkgreen: "#14B34B",
      },
      fontFamily: {
        OSWALD: ["Oswald", "sans-serif"],
      },
    },
  },
};
