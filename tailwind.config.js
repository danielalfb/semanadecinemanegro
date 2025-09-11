// #224296
// #C6D3DE
// #6EA7BD
// #CEA1A2
// #C17153
// #7E8C5E
// #009268
// #C5B743
// #E8ECA8
// #E9E2CB
// #231F20

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
      laptop: "1440px",
    },
    colors: {
      "blue-100": "#C5D3DE ",
      "blue-200": "#6FA6BD",
      "blue-300": "#214296",
      lilac: "#8F78B0",
      pink: "#CEA1A1",
      earth: "#C27154",
      olive: "#7E8B5F",
      green: "#009269",
      mustard: "#C5B743",
      lime: "#E8EDA8",
      white: "#E9E2CB",
      brown: "#231F20",
      black: "#0E0C0C",
      sand: "#e0d0a1",
    },
    fontFamily: {
      sans: ["Broke, sans - serif"],
    },
    extend: {
      keyframes: {
        "scroll-x": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 0" }, // ajusta 1000px ao tamanho do teu SVG
        },
      },
      animation: {
        "scroll-x": "scroll-x 30s linear infinite",
      },
    },
  },
  plugins: [],
};
