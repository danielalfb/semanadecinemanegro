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
      laptopl: "1440px",
    },
    colors: {
      "slate-200": "#f0f0f0",
      white: "#fffdf0",
      black: "#000000",
      gray: "#3A392A",
      "cream-100": "#FBF8F0",
      "cream-200": "#F6EEDF",
      "peach-400": "#F0B58F",
      "pink-100": "#FEC0E1",
      "pink-200": "#FFC0E3",
      "pink-300": "#FF9FAF",
      "pink-400": "#FF617E",
      "pink-500": "#E55E63",
      "pink-600": "#DC435B",
      "pink-700": "#C71D37",
      "pink-800": "#880E2B",
      "blue-500": "#507FE1",
      "blue-600": "#1E478F",
      "blue-400": "#224296",
      "blue-700": "#07141E",
      "red-500": "#DF2100",
      "red-600": "#B2282A",
      "green-100": "#009268",
      "green-400": "#B3DA8F",
      "green-500": "#46AA30",
      "brown-100": "#231F20",
    },
    fontFamily: {
      sans: ["Broke, sans - serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
