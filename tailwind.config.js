/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        podcast: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
      },
      marginInline: {
        auto: "auto",
      },
    },
  },
  plugins: [],
};
