module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [/(^bg)-(.*)-(\d{3}$)/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        my: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
