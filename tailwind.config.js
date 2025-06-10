/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
      pink: "#DCB7BD",   
      purple: "#825293",    
      yellow: "#F9EED6",
      gray:  "#3F3F3F",
    }, 
    fontFamily: {
      jura: ['Jura', 'sans-serif'], 
    },   
    },
    },

  plugins: [],
}


