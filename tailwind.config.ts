import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

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
        'red-primary': '#d9363e',
        'red-secondary': '#E20A0A',
        //======= Shades Of Yellow ========
        'yellow-normal': '#fcaf17',
        //======= Shades Of White ========
        'white-light': '#ECF4FF',
        'white': '#FFFFFF',
        //======= Shades Of Black ========
        'black-medium': '#222',
        'black-dark': '#120F2D',
        //======= Shades Of Gray ========
        'gray-light': '#9b9b9b',
        'gray-medium': '#6B6A75',
        'gray-base': '#eaeaea',
        'gray-normal': '#333',
        'gray-accent': '#2a334e'
        //======= Other Colors ========
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        openSans: ['var(--font-opensans)']
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      boxShadow: {
        medium: '0 5px 83px 0 rgba(27,26,26,0.12)'
      }
    },
    filter: {
      invert: 'invert(1)'
    },
    mixBlendMode: {
      difference: 'difference'
    }
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      );
    })
  ]
};
export default config;
