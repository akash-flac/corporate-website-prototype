/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-purple': '#260651',
      },
      animation: {
        "loop-scroll" : "loop-scroll 5s linear infinite", 
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
}