/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        solid: '15px 15px 0 #292929',
        btnsolid: '10px 10px 0 #292929',
      },
      colors: {
      pink: "#DCB7BD",   
      purple: "#825293",    
      yellow: "#FFEEC9",
      gray:  "#3F3F3F",
    }, 
    fontFamily: {
      jura: ['Jura', 'sans-serif'],
      press: ['"Press Start 2P"', 'system-ui'],
    },   
    },
    },

  plugins: [],
}


