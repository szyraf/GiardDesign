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
        lightBlackish: "#333",
        lightPrimary: "#D3C2AC", // Slightly lighter light version of primary
        lightSecondary: "#3E8B51", // Slightly lighter light version of secondary
        lightTertiary: "#E8E5E1", // Slightly lighter light version of tertiary
      },
    },
  },
  plugins: [],
};
