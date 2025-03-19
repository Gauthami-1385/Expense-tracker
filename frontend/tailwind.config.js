/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        color:{
          'olive':'#354a2f',
          'light-olive':'#5c724a','cream':'#f5f5d5'
        }
      },
    },
    plugins: [],
  };
  