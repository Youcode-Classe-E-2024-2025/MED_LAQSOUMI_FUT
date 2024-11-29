/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/js/**/*.js", "./*.html"],
  theme: {
    extend: {
      screens: {
        1000: "1000px",
        820: "820px",
        750: "750px",
        680: "680px",
        425: "425px",
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"], // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
};
