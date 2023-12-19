/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#7867ED',
        light: '#F3FAFF'
      },
      fontFamily: {
        custom: ['Roboto', 'sans-serif'], // Add the custom font family
      },
    }
  },
  plugins: [],
}
