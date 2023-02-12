/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('/src/Assets/Image/22.jpg')",
            }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}