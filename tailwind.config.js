/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        line: 'linear-gradient(90deg, rgba(188,188,188,1) 0%, rgba(255,255,255,1) 35%, rgba(182,182,182,1) 100%, rgba(249,146,0,1) 100%, rgba(255,255,255,1) 100%);'
      },
      boxShadow: {
        cstm: '0 4px 8px 0 rgba(0,0,0,.1)'
      }
    },
  },
  plugins: [],
}