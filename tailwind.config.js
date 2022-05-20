module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'meteo': "url('../src/assets/meteo.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
