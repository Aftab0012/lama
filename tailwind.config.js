/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7e22ce",
        customBlue: "#211935",
        customGray: "#d9cfe4",
        customGray: "#f3e8ff",
      },
    },
  },
  plugins: [],
};
