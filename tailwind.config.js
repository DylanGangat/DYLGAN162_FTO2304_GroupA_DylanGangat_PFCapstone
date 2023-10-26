/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Mulish", "sans-serif"],
        body: ["Space Mono", "monospace"],
      },
      gridTemplateColumns: {
        podcast: "repeat(auto-fit, minmax(min(100%, 250px), 250px))",
        episode: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
      },
      marginInline: {
        auto: "auto",
      },
      colors: {
        body: "#F1F1F1",
        background: "#0F0F0F",
        primary: "#F1F1F1",
        secondary: "#272727",
        accent: {
          50: "#ffe5e5",
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
          950: "#1a0000",
        },
      },
      maxWidth: {
        255: "250px",
      },
      minWidth: {
        255: "250px",
      },
      minHeight: {
        custom: `calc(100vh - 220px)`,
        carousel: "470px",
      },
    },
  },
  plugins: [],
};
