/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fd4100",
        white: "#fff",
        gold: "#FEC900",
        darkGrey:"#272A37"
      },
    },
  },
  plugins: [],
};
