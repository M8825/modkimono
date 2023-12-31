import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },
      colors: {
        'dgray': '#A1A1A1',
        'lgray': "#EDEDED",
      },
      fontFamily: {
        'open-sans': ['Geist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
