/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'anime-blue': '#3b82f6', // Custom color for your project
      },
    },
  },
  plugins: [],
}