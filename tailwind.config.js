/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6EE',
        sand: '#F0E7D8',
        'sand-dark': '#E4D7C0',
        charcoal: '#1E2126',
        'charcoal-soft': '#3A3F47',
        bronze: {
          DEFAULT: '#8B6A3F',
          light: '#A9855A',
          dark: '#6B4F2E',
        },
        line: '#E3D9C6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        content: '1400px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 0.9s ease both',
      },
    },
  },
  plugins: [],
}
