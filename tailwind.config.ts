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
        "icnBubble": 'hsl(var(--icnBubble))',
        "activeColor":'hsl(var(--activeColor))',
        "icn": 'hsl(var(--icn))',
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
          '--icnBubble': 'rgba(0, 0, 0, .8);', 
          '--icn': 'black',
          
        },
      },
      {
        business: {
          ...require('daisyui/src/theming/themes')['[data-theme=business]'],
          '--navBg': 'rgba(35,40,46, .4)',
          '--icnBubble': 'rgba(255, 255, 255, .8)', 
          '--icn': 'white',
        },
      },
    ],
  },
}
export default config
