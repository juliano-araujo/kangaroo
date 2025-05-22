/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#CB9953',
        secondary: '#4A5568',
        background: '#FFFFFF',
        textDark: '#1F2937',
        textLight: '#9CA3AF',
      },
    },
  },
  plugins: [],
};
