/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}' // Make sure to include .jsx and .tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'mid': '#087EBD', 
        'gry': '#F1F1F2',
      },
    },
  },
  plugins: [],
};
