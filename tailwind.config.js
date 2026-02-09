/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "batman-black": "#0a0a0a",
        "cinnamon-blue": "#b9e2f5",
        "valentine-red": "#e11d48",
      },
    },
  },
  plugins: [],
};
