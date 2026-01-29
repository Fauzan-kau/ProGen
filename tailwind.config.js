/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ProGen Brand Colors
        brand: {
          red: {
            DEFAULT: '#FC5B50',
            hover: '#FC443C',
          },
        },
        background: {
          light: '#F8F5E8',
          dark: '#313743',
        },
        text: {
          light: '#313743',
          dark: '#F8F5E8',
        },
        surface: {
          DEFAULT: '#313743',
          light: '#F8F5E8',
        },
      },
      fontFamily: {
        heading: ['Neulis Cursive', 'system-ui', 'sans-serif'],
        body: ['Neulis Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Custom spacing scale
        18: '4.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
