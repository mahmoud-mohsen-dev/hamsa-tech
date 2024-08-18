import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '991px',
      'xl': '1080px',
      '2xl': '1370px',
      '3xl': '1536px'
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '7rem',
        '2xl': '8rem'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        //======= Shades Of Blue ========
        'blue-primary': '#151CB9',
        //======= Shades Of Red ========
        'red-secondary': '#E20A0A',
        //======= Shades Of White ========
        'white-light': '#ECF4FF',
        'white': '#FFFFFF',
        //======= Shades Of Black ========
        'black-dark': '#120F2D',
        //======= Shades Of Gray ========
        'gray-medium': '#6B6A75',
        'gray-normal': '#333',
        'gray-accent': '#2a334e'
        //======= Other Colors ========
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        openSans: ['var(--font-opensans)']
      }
    }
  },
  plugins: []
};
export default config;
