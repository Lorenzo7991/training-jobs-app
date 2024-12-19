/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /* Setting the properties of the tailwind theme */
  theme: {
    extend: {
      /* Setting the Font Family */
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      /* Setting a class with predefined dimensions to create two columns, left = 70% / right = 30% */
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};

