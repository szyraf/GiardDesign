/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  // purge: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#DCC1AB",
        secondary: "#1B5B31",
        tertiary: "#F5F0EC",
        blackish: "#111",
      },
    },
  },
  plugins: [],
};