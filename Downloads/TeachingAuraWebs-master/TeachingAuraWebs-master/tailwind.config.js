module.exports = {
  mode: 'jit',
  purge: {
    preserveHtmlElements: false,
    options: {
      keyframes: false,
    },
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      './public/index.html',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};