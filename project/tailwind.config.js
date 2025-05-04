/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url("https://www.facebook.com/photo?fbid=1151590972893110&set=a.705779224140956")',
        'concrete-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://www.facebook.com/photo?fbid=1151590972893110&set=a.705779224140956")',
        'stone-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg")',
        'machinery-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg")',
      },
    },
  },
  plugins: [],
};