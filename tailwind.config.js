/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}' // Make sure to include .jsx and .tsx
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#D3D3D3', 
        'dark-teal': '#3E4E88',
      },
    },
  },
  plugins: [],
};
