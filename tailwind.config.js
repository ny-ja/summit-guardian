/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "heart-rate": "url('/src/assets/images/heart-rate.jpg')",
      "logo": "url('/src/assets/logo.svg')",
      "body-temperature": "url('/src/assets/images/body-temperature.jpg')",
      "ambient-temperature": "url('/src/assets/images/ambient-temperature.jpg')",
    },
  },
  plugins: [],
};
