/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canva: {
          bg: '#FAF9FB',
          surface: '#F3F1F5',
          white: '#FFFFFF',
          text: '#1C1A1F',
          muted: '#6F6A73',
          border: '#E4E0E7',
          purple: '#6B4C7A',
          darkPurple: '#4B3557',
          lavender: '#B8A8C1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'DM Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'canva': '14px',
        'btn': '9px',
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(107, 76, 122, 0.05)',
        'editorial-hover': '0 10px 30px -4px rgba(107, 76, 122, 0.08)',
        'code-glow': '0 12px 40px -8px rgba(107, 76, 122, 0.25)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
