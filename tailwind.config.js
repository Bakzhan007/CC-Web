/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          400: '#6b8afd',
          500: '#4361ee',
          600: '#3b53e0',
          700: '#2f43b8',
          900: '#1e2a6e',
        },
      },
    },
  },
  plugins: [],
};
