module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Noto Sans CJK JP"', 'sans-serif'],
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
