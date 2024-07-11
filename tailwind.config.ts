import type { Config } from 'tailwindcss';

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        PatrickHandSC: ['PatrickHandSC', 'Fafo Nihongo', 'sans-serif'],
        PressStart2P: ['PressStart2P', 'Fafo Nihongo', 'sans-serif'],
        FafoNihongo: ['Fafo Nihongo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
