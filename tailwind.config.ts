import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f7ff',
          500: '#7c3aed',
          700: '#5b21b6',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
