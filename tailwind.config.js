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
        riseUpFadeIn: {
          '0%': { transform: 'translate(0,5rem)', opacity: '0' },
          '100%': { transform: 'translate(0,0)', opacity: '1' },
        },
        riseUpFadeOut: {
          '0%': { transform: 'translate(0,5rem)', opacity: '1' },
          '100%': { transform: 'translate(0,0)', opacity: '0' },
        },
        growAndFadeIn: {
          '0%': { transform: 'scale(0)', transform: 'translate(0, 5rem)', opacity: '0' },
          '100%': { transform: 'scale(1)', transform: 'translate(0,0)', opacity: '1' },
        },
        riseDownFadeIn: {
          '0%': { transform: 'translate(0,-5rem)', opacity: '0' },
          '100%': { transform: 'translate(0,0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'scale(0)', transform: 'rotate(-15deg)' },
          '50%': { transform: `scale(50%)`, transform: 'rotate(45deg)' },
        },
        shadowInBlue: {
          '0%': {boxShadow: '0px 0px 0px rgba(49,104,170,1)'},
          '100%': {boxShadow: '20px 20px 0px rgba(49,104,170,1)'},
        },
        shadowInGreen: {
          '0%': {boxShadow: '0px 0px 0px #889F34'},
          '100%': {boxShadow: '20px 20px 0px #889F34'},
        },
        shadowInYellow: {
          '0%': {boxShadow: '0px 0px 0px #FEAC00'},
          '100%': {boxShadow: '20px 20px 0px #FEAC00'},
        }
    },
    animation: {
      growToRight: 'growToRight .5s linear 1',
      wiggle: 'wiggle 5s ease-in-out infinite',
      shadowInBlue: 'shadowInBlue 1s ease-in-out 1',
      shadowInGreen: 'shadowInGreen 1s ease-in-out 1',
      shadowInYellow: 'shadowInYellow 1s ease-in-out 1',
      comeOutLeft: 'comeOutLeft 1s ease-in-out 1',
      riseUpFadeIn: 'riseUpFadeIn 1s ease-in-out 1',
      riseUpFadeOut: 'riseUpFadeOut 1s ease-in-out 1',
      riseDownFadeIn: 'riseDownFadeIn 1s ease-in-out 1',
      growAndFadeIn: 'growAndFadeIn 1s ease-in-out 1',
      growAndFadeIn1: 'growAndFadeIn 1s ease-in-out 0.5s 1',
      growAndFadeIn2: 'growAndFadeIn 1s ease-in-out 1s 1',
      growAndFadeIn3: 'growAndFadeIn 1s ease-in-out 1.5s 1',
    }
  },
  plugins: [],
}
}
