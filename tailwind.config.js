/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
};
