module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "393px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    colors: {
      "slate-200": "#f0f0f0",
      white: "#fffdf0",
      black: "#000000",
      "blue-500": "#001C42",
      "blue-400": "#0A0957",
      "blue-300": "#0095EC",
      "blue-200": "#00CCFC",
      "blue-100": "#50DDFE",
      "green-500": "#00392E",
      "green-100": "#6AA924",
      "yellow-500": "#F29F05",
      "yellow-100": "#F2CB05",
      "slate-800": "rgb(30 41 59)",
    },
    fontFamily: {
      sans: ["Epilogue, sans-serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
