module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "source-serif": ["Source Serif Pro", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
