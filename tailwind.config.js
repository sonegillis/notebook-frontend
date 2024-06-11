/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: {
          100: '#24A0ED',
          200: '#0086D0',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        dark: {
          100: '#343434',
          200: '#28282B',
          300: '#1B1212',
        },
      }),
      fontFamily: {
        body: ['Poppins'],
      },
    },
  },
  plugins: [],
};
