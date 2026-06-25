/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        teal: {
          50:  '#f0fafa',
          100: '#d9f2f1',
          200: '#b1e4e3',
          300: '#7dd0ce',
          400: '#4bbcb8',
          500: '#3aafaa',
          600: '#2a9490',
          700: '#237573',
          800: '#1e5e5c',
          900: '#1a4d4b',
        },
        pink: {
          50:  '#fff0f5',
          100: '#ffd6e6',
          200: '#ffadd0',
          300: '#ff80b6',
          400: '#f5539d',
          500: '#e8407a',
          600: '#d02f68',
          700: '#b02259',
          800: '#8e1948',
          900: '#6e1338',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(58, 175, 170, 0.10)',
        'pink-glow': '0 4px 24px rgba(232, 64, 122, 0.18)',
        'card': '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
