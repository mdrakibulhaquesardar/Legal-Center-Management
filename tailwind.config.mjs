import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#0284c7',
              textDecoration: 'underline',
              '&:hover': {
                color: '#0369a1',
              },
            },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            strong: { color: 'inherit' },
            code: { color: 'inherit' },
            blockquote: { color: 'inherit' },
          },
        },
      },
    },
  },
  plugins: [typography],
};

