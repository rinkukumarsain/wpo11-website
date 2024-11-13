// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        'theme1': '#3130ee',
        'theme2': ' #FF0000',
        // 'theme3': '#171347',
        // 'theme4': '#1c1c27',
      },
      fontFamily: {
        'Inter': ['"Inter", sans-serif'],
      }
    },
  },
  plugins: [],
}