import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        "icn": 'hsl(var(--activeIcn))'
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
          "base-100": "#f1f1f1",
          '--navBg': 'rgba(255,255,255, .4)',
          '--icn': 'rgb(51 65 85);', 
          
        },
      },
      {
        business: {
          ...require('daisyui/src/theming/themes')['[data-theme=business]'],
          '--navBg': 'rgba(35,40,46, .4)',
          '--icn': 'rgb(255 255 255)', 
        },
      },
    ],
  },
}
export default config
