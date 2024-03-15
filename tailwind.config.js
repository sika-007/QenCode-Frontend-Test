/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1fcc39",
        secondary: "#65fc7c",
      },
    },
  },
  plugins: [],
};
