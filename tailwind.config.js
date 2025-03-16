/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ['atmospheric', 'sans-serif'],
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [],
};

