/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Nunito: ["Nunito Sans", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
