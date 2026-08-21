/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hind: ['Hind', 'Tahoma', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'Tahoma', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
      },
      fontSize: {
        // ── Typography Design System Scale ─────────────────────────────────
        // Headings — Hind, SemiBold (600); responsive via mobile tokens + lg: prefix
        'type-h1':      ['3rem',     { lineHeight: '3.5rem'    }], // 48px / 56px
        'type-h2':      ['2.5rem',   { lineHeight: '3rem'      }], // 40px / 48px
        'type-h3':      ['2rem',     { lineHeight: '2.5rem'    }], // 32px / 40px
        'type-h4':      ['1.5rem',   { lineHeight: '2rem'      }], // 24px / 32px
        'type-h5':      ['1.25rem',  { lineHeight: '1.75rem'   }], // 20px / 28px
        'type-h6':      ['1.125rem', { lineHeight: '1.625rem'  }], // 18px / 26px
        // Body — Hind, Regular (400)
        'type-body-lg': ['1.125rem', { lineHeight: '1.75rem'   }], // 18px / 28px
        'type-body':    ['1rem',     { lineHeight: '1.5rem'    }], // 16px / 24px
        'type-body-sm': ['0.875rem', { lineHeight: '1.375rem'  }], // 14px / 22px
        // UI — DM Sans
        'type-sub':     ['1.25rem',  { lineHeight: '1.75rem'   }], // 20px / 28px, Medium (500)
        'type-cap':     ['0.75rem',  { lineHeight: '1.125rem'  }], // 12px / 18px, Regular (400)
        // Mobile heading sizes — use as base, override at lg: with desktop token
        'type-h1-mob':  ['2rem',     { lineHeight: '2.5rem'    }], // 32px / 40px
        'type-h2-mob':  ['1.75rem',  { lineHeight: '2.25rem'   }], // 28px / 36px
        'type-h3-mob':  ['1.5rem',   { lineHeight: '2rem'      }], // 24px / 32px
      },
      colors: {
        brand: {
          primary:   '#5B1027',
          highlight: '#C32033',
          dark:      '#222222',
          neutral:   '#BFBFBF',
          soft:      '#F3DAB2',
        },
      },
    },
  },
  plugins: [],
};
