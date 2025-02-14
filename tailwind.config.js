/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'sidebar': '350px',
      },
      minWidth: {
        'sidebar': '300px',
      },
      ringColor: {
        DEFAULT: '#D1D5DB', // light grey
      },
    },
  },
  plugins: [],
}
