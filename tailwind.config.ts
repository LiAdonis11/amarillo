import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F4B400',
          dark: '#C88700',
        },
        cream: '#FFF9EB',
        charcoal: '#252525',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}

export default config
