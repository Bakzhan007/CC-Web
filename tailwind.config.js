/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Единый брендовый акцент (полная шкала 50–900)
        brand: {
          50: '#eef2ff',
          100: '#dbe2ff',
          200: '#bccaff',
          300: '#93a8ff',
          400: '#6b8afd',
          500: '#4361ee',
          600: '#3b53e0',
          700: '#2f43b8',
          800: '#283a93',
          900: '#1e2a6e',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
