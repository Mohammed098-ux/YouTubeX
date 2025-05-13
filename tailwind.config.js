/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0F0F0F',
          secondary: '#1C1C1C',
          tertiary: '#282828',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
        },
        accent: {
          green: '#00FF88',
          purple: '#A259FF',
          blue: '#00B2FF',
          orange: '#FF6D00',
          yellow: '#FFD700',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00FF88 0%, #00B2FF 100%)',
        'gradient-announcement': 'linear-gradient(90deg, #FF6D00, #FFD700)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};