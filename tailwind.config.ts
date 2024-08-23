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
        'blue-normal': '#151CB9',
        'blue-dark': '#17457c',
        'blue-sky-ultralight': '#ECF4FF',
        'blue-sky-normal': '#00A0E9',
        'blue-accent': '#364d79',
        //======= Shades Of Red ========
        'red-normal': '#d9363e',
        'red-medium': '#d71820',
        'red-accent': '#E20A0A',
        'red-dark': '#d7150e',
        //======= Shades Of Yellow ========
        'yellow-normal': '#EFB918',
        'yellow-medium': '#fcaf17',
        //======= Shades Of Green ========
        'green-normal': '#96BE24',
        'green-medium': '#65b531',
        //======= Shades Of White ========
        'white-light': '#f9f9f9',
        //======= Shades Of Black ========
        'black-light': '#333333',
        'black-medium': '#222',
        'black-dark': '#120F2D',
        //======= Shades Of Gray ========
        'gray-ultralight': '#eaeaea',
        'gray-light': '#9b9b9b',
        'gray-medium': '#6B6A75',
        //======= Other Colors ========
        'blue-gray-light': '#575a7b',
        'blue-gray-medium': '#2a334e'
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
        medium: '0 5px 83px 0 rgba(27,26,26,0.12)',
        featured: '0 2px 10px rgba(0, 0, 0, 0.12)',
        featuredHovered: ' 0 2px 10px rgba(0, 0, 0, 0.2)'
      },
      filter: {
        invert: 'invert(1)'
      },
      mixBlendMode: {
        difference: 'difference'
      },
      gridTemplateColumns: {
        // footer: '2fr repeat(auto-fit,minmax(350px,1fr))'
        footer: '1.2fr .7fr 1.3fr 1fr'
      }
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
