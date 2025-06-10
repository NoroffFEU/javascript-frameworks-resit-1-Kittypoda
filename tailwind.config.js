/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        solid: '15px 15px 0 rgba(0, 0, 0, 0.5)',
        btnsolid: '10px 10px 0 rgba(0, 0, 0, 0.5)',
      },
      colors: {
      pink: "#DCB7BD",   
      purple: "#825293",    
      yellow: "#FFEEC9",
      gray:  "#3F3F3F",
    }, 
    fontFamily: {
      jura: ['Jura', 'sans-serif'], 
    },   
    },
    },

  plugins: [],
}


