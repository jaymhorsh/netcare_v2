/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "first": "#004FFF", // Dark background color
        "grad1":"#002F94",
        "grad2":"#4480E6"

      },
      fontSize: {
        12: "12px",
        14: "14px",
        36:['32px','42px']
      },
      screens: {
        xs: "275px",
        ...defaultTheme.screens,
        xs: { max: "540px" },
      },
    },
  },
  plugins: [],
};
