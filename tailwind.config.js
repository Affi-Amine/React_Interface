module.exports = {
  //this purge will analyse every file in the listed files to minimize the use of css lines, since tailwind generates
  //a very large file of css lines
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')]
}
