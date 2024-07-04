/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'xs': {'max': '639px'},
      'med': {'max': '768px'},
      ...defaultTheme.screens,
    },
    extend: {
      fontSize:{
        'clamp': 'clamp(20px, 8vw, 80px)',
        'subClamp':'clamp(26px,5vw,32px)'

      },
      textIndent:{
        'writing-mode': 'vertical-rl'
      },
      colors: {
        bodyColor: "#8892b0",
        headingColor: "#ccd6f6",
        btnColor:"#61f8d5",
        background:"#0a192f",
        boxColor:"#112240"
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed'
        },
      });
    }
  ],
};
