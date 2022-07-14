/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1430px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        growToRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        comeOutLeft: {
          '0%': { left: '20rem' },
          '100%': { left: '25rem' },
        },
        wiggle: {
          '0%, 100%': { transform: 'scale(0)', transform: 'rotate(-15deg)' },
          '50%': { transform: `scale(50%)`, transform: 'rotate(45deg)' },
        },
        shadowIn: {
          '0%': {boxShadow: '0px 0px 0px rgba(49,104,170,1)'},
          '100%': {boxShadow: '20px 20px 0px rgba(49,104,170,1)'}
        }
    },
    animation: {
      growToRight: 'growToRight .5s linear 1',
      wiggle: 'wiggle 5s ease-in-out infinite',
      shadowIn: 'shadowIn 1s ease-in-out 1',
      comeOutLeft: 'comeOutLeft 1s ease-in-out 1',
    }
  },
  plugins: [],
}
}
