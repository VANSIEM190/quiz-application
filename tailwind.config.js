/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '574px' },
        'max-sm2': { max: '1000px' },
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb)',
      },
    },
  },
  plugins: [],
}
