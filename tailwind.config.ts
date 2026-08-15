import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A18',       // near-black charcoal — primary text / dark sections
        stone: '#EDE9E1',     // warm architectural stone — page background
        paper: '#FAF9F6',     // off-white — card / surface background
        slate: {
          DEFAULT: '#4A5568', // steel-grey — secondary text, structure lines
          light: '#8590A0',
        },
        bronze: {
          DEFAULT: '#8C6A4A', // signature accent — laser-cut bronze/copper
          light: '#B08D66',
          dark: '#6B4F37',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
export default config
