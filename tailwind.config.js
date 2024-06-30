/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rowdies': ['Rowdies', 'sans-serif'],
      },
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      spinAnimation: {
        '0%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(-15deg)' },
        '50%': { transform: 'rotate(0deg)' },
        '75%': { transform: 'rotate(15deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      spin: 'spin 1s linear infinite',
      spinAnimation: 'spinAnimation 1.2s ease-in-out',
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}

