module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,md}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
