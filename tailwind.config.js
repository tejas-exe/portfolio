/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Spirited Away night — ocean & starlight
        night: {
          DEFAULT: '#0A1830',
          950: '#050D1F',
          900: '#0A1830',
          800: '#0F2340',
          700: '#153258',
          600: '#1B3F6B',
        },
        // Bathhouse water / Haku river blues
        sea: {
          700: '#173F63',
          600: '#1D4E7A',
          500: '#2E6DA3',
          400: '#4A8DBE',
          300: '#7FB3D8',
          200: '#A9CFE8',
          100: '#D3E8F5',
        },
        // Soft fog for secondary text
        mist: {
          DEFAULT: '#B9CEDF',
          400: '#8FA9C0',
          300: '#A5BBCE',
        },
        // Ink — light text on night
        ink: {
          DEFAULT: '#EAF4FB',
          dim: '#B9CEDF',
        },
        // Lantern gold — warm light in the dark
        lantern: {
          200: '#FFF3CC',
          300: '#FFE9A8',
          400: '#FFD97A',
          500: '#F5C542',
          600: '#D9A425',
          700: '#B08420',
        },
        // Haku river spirit teal-green
        spirit: {
          300: '#A8E6CF',
          400: '#8FD3C7',
          500: '#5EC8B8',
          600: '#3AA396',
          700: '#2C7F76',
        },
        // No-Face cool slate
        noface: {
          DEFAULT: '#5E7A94',
          300: '#7E96AB',
        },
        // Muted sakura (soot-sprite blossom accent)
        sakura: {
          300: '#E8A9BE',
          400: '#D988A9',
          500: '#C06C8E',
        },
      },
      fontFamily: {
        display: ['"Caveat"', '"Comic Sans MS"', 'cursive'],
        heading: ['"Quicksand"', '"Nunito Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Nunito Sans"', '"Nunito"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(3, 10, 24, 0.5), 0 2px 8px -1px rgba(3, 10, 24, 0.35)',
        'soft-md': '0 10px 32px -4px rgba(3, 10, 24, 0.55), 0 4px 12px -2px rgba(3, 10, 24, 0.35)',
        'soft-lg': '0 24px 48px -8px rgba(3, 10, 24, 0.6), 0 8px 20px -4px rgba(3, 10, 24, 0.4)',
        'lantern': '0 0 24px rgba(245, 197, 66, 0.35), 0 8px 28px -6px rgba(245, 197, 66, 0.45)',
        'lantern-lg': '0 0 40px rgba(245, 197, 66, 0.4), 0 12px 36px -6px rgba(245, 197, 66, 0.5)',
        'spirit-glow': '0 0 28px rgba(94, 200, 184, 0.3), 0 10px 30px -6px rgba(94, 200, 184, 0.4)',
        'sea-glow': '0 0 28px rgba(74, 141, 190, 0.35), 0 10px 32px -6px rgba(74, 141, 190, 0.45)',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 11s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 7s ease-in-out infinite',
        'twinkle': 'twinkle 3.5s ease-in-out infinite',
        'sway': 'sway 5.5s ease-in-out infinite',
        'bob': 'bob 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'rise': 'rise 14s linear infinite',
        fadeIn: 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        slideUp: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(24px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-16px, 16px) scale(0.97)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-20px, 22px) scale(0.96)' },
          '66%': { transform: 'translate(22px, -14px) scale(1.04)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.25)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-90vh) translateX(30px)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
