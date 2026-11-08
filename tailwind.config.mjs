import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        astro: {
          bg: '#0d0f14',
          card: '#13161c',
          panel: '#181b22',
          border: 'rgba(255, 255, 255, 0.1)',
          blue: '#3245ff',
          purple: '#bc52ee',
          pink: '#f041ff',
          orange: '#f85108',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'Cascadia Code',
          'Source Code Pro',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#e5e7eb',
            a: {
              color: '#c084fc',
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid rgba(192, 132, 252, 0.4)',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#e879f9',
                borderColor: '#e879f9',
              },
            },
            h1: {
              color: '#ffffff',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: '#f3f4f6',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '0.5rem',
              marginTop: '2rem',
            },
            h3: {
              color: '#f3f4f6',
              fontWeight: '600',
            },
            strong: { color: '#ffffff' },
            code: {
              color: '#f0abfc',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#818cf8',
              backgroundColor: 'rgba(129, 140, 248, 0.06)',
              padding: '1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            hr: { borderColor: 'rgba(255, 255, 255, 0.1)' },
            'ul > li::marker': { color: '#a855f7' },
            'ol > li::marker': { color: '#a855f7' },
            th: {
              color: '#f3f4f6',
              borderBottomColor: 'rgba(255, 255, 255, 0.2)',
            },
            td: {
              borderBottomColor: 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
