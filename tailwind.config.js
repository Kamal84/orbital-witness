/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern:
        /(bg|ring|border|shadow|text)-(primary|secondary|info|success|danger|warning|gray)(-(50|100|200|300))?/,
      variants: ['hover', 'focus', 'active', 'dark'],
    },
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      xs: ['8px', '12px'],
      sm: ['12px', '16px'],
      base: ['16px', '24px'],
      lg: ['20px', '30px'],
      xl: ['24px', '32px'],
      "2xl": ['28px', '42px'],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
    },
    extend: {
      colors: {
        primary: {
          100: '#DEFAFC',
          200: '#4ADEEB',
          300: '#206A87',
        },
        secondary: {
          100: '#FF6C50',
          200: '#D13C1E',
        },
        warning: {
          dark: '#B62723',
          light: '#FCEEED',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#DEDEDE',
          300: '#B9B9B9',
          400: '#AAAAAA',
          500: '#818181',
          600: '#494949',
          700: '#2D2D2D',
          800: '#111111',
          900: '#000000',
        },
      },
    },
  },
};
