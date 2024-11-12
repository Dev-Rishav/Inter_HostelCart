/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary:"#BB2C51",
          secondary:"#21D4B9",
          dark:"#303030"
      },
      fontFamily:{
        inter:["Inter", "sans-serif"],
        cursive:["Ephesis", "cursive"],
      },
    },
  },
  plugins: [],
}

