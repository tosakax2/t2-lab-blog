module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans CJK JP"', '"Noto Sans JP"', 'sans-serif'],
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
