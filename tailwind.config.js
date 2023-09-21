/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-100': '#1A1423', //almost black
        'primary-200': '#8D818C', //gray taupe  
        'secondary-100': '#119DA4', //dark cyan 
        'danger-150': '#307473', //myrtle green
        'light-100': '#E4FDE1', //light greenish
      },
    },
    plugins: [],
  }
}
