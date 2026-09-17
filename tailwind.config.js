module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      minHeight: {
        full: "170px",
      },
    },
  },
  variants: {},
  plugins: [],
};
