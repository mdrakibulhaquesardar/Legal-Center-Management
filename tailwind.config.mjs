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
        mono: [
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#0f172a',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: '#0f172a',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid #e2e8f0',
            },
            h3: {
              color: '#1e293b',
              fontWeight: '600',
            },
            strong: { color: '#0f172a' },
            code: {
              color: '#0f172a',
              backgroundColor: '#f1f5f9',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              color: '#475569',
              borderLeftColor: '#cbd5e1',
              fontStyle: 'normal',
            },
            th: {
              color: '#0f172a',
              fontWeight: '600',
              borderBottomColor: '#cbd5e1',
            },
          },
        },
        dark: {
          css: {
            color: '#94a3b8',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            h1: { color: '#f8fafc' },
            h2: {
              color: '#f8fafc',
              borderBottomColor: '#1e293b',
            },
            h3: { color: '#f1f5f9' },
            strong: { color: '#f8fafc' },
            code: {
              color: '#f8fafc',
              backgroundColor: '#1e293b',
            },
            blockquote: {
              color: '#94a3b8',
              borderLeftColor: '#334155',
            },
            th: {
              color: '#f8fafc',
              borderBottomColor: '#334155',
            },
            td: {
              borderBottomColor: '#1e293b',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
