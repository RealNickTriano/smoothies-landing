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
          '0%': { transform: 'width: 0%', width: '0%' },
          '100%': { transform: 'width: 100%', width: '100%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
    },
    animation: {
      growToRight: 'growToRight .5s linear 1',
      wiggle: 'wiggle 5s ease-in-out infinite',
    }
  },
  plugins: [],
}
}
