module.exports = {
  mode: "jit",
  darkMode: "media",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    mode: "all",
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
