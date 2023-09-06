import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: 
      {
        "navBg": 'hsl(var(--navBg))', // color-variable
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
        },
      },
      {
        business: {
          ...require('daisyui/src/theming/themes')['[data-theme=business]'],
          '--navBg': '#23282E',
        },
      },
    ],
  },
}
export default config
