/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merriweather:['Merriweather', 'sans-serif'],
        MerriweatherItalic:['MerriweatherItalic', 'sans-serif'],
        MerriweatherBlackItalic:['MerriweatherBlackItalic', 'sans-serif']
      }
    },
  },
  plugins: [],
}