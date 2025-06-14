/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../**/*.{html,js,svelte,ts,astro,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          100: 'var(--color-brand-100)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
          900: 'var(--color-brand-900)',
        },
        // Surface colors
        surface: {
          DEFAULT: 'var(--color-surface)',
          secondary: 'var(--color-surface-secondary)',
          tertiary: 'var(--color-surface-tertiary)',
        },
        // Text colors (renamed from text-text-* to text-*)
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        // Border colors
        border: {
          primary: 'var(--color-border-primary)',
          focus: 'var(--color-border-focus)',
        },
        // Accent colors
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
    }
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-base': {
          '@apply inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed': {},
          'min-height': '2.5rem',
          'gap': '0.5rem'
        },
        '.btn-primary-colors': {
          '@apply bg-accent-primary text-white hover:bg-brand-600 focus:ring-brand-500/50': {},
          '&:active': {
            '@apply bg-brand-700': {}
          }
        },
        '.btn-secondary-colors': {
          '@apply bg-surface-secondary text-text-primary border border-border-primary hover:bg-surface-tertiary focus:ring-brand-500/50': {},
          '&:active': {
            '@apply bg-surface-tertiary': {}
          }
        },
        '.card-base': {
          '@apply bg-surface border border-border-primary rounded-lg': {},
          'box-shadow': 'var(--shadow-soft)',
          'transition': 'box-shadow var(--duration-normal) var(--ease-in-out), transform var(--duration-fast) var(--ease-in-out)'
        }
      })
    }
  ]
}
