import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: 
      {
        "navBg": 'hsl(var(--navBg))', // color-variable
        "activeIcn": 'hsl(var(--activeIcn))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          '--navBg': '#e8e8e8',
          '--activeIcn': '#a5b4fc', //Indigo 300
          
        },
      },
      {
        business: {
          ...require('daisyui/src/theming/themes')['[data-theme=business]'],
          '--navBg': '#23282E',
          '--activeIcn': '#6366f1', //Indigo 500
        },
      },
    ],
  },
}
export default config
