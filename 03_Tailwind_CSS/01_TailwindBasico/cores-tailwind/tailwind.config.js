/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            'vermelho-personalizado': '#FF5733',
            'azul-personalizado': '#3357FF',
            'verde-personalizado': '#33FF57',
        }
    },
  },
  plugins: [],
}
