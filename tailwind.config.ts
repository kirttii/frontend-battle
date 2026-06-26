import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        jetbrains: ['var(--font-jetbrains)'],
      },
      colors: {
        'arctic': '#F1F6F4',
        'oceanic': '#172B36',
        'nocturnal': '#114C5A',
        'saffron': '#FF9932',
        'forsythia': '#FFC801',
        'mint': '#D9E8E2',
      },
    },
  },
  plugins: [],
}
export default config