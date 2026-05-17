import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-anthropic-sherif)', 'system-ui', 'sans-serif'],
        display: ['var(--font-copernicus-cond)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'md-card': '28px',
        'md-chip': '12px',
        'md-button': '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
