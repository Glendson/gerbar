import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9f4e8',
          100: '#f2dca8',
          300: '#d7a85c',
          500: '#c98f35',
          700: '#8b5a1b',
          900: '#1a2340',
        },
        surface: {
          950: '#070b14',
          900: '#0b1322',
          800: '#0f1c34',
          700: '#12233f',
        },
      },
      boxShadow: {
        panel: '0 20px 58px -30px rgba(3, 10, 25, 0.95)',
        soft: '0 10px 30px -18px rgba(6, 14, 30, 0.75)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
