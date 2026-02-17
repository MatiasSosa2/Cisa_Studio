/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Deep Space" estilo Apple Dark
        space: {
          950: '#000000', // Fondo infinito
          900: '#0a0a0a',
          800: '#161617',
        },
        bg: {
          DEFAULT: '#000000', // Fondo principal
          surface: '#1C1C1E', // Superficies/flotantes
        },
        text: {
          high: 'rgba(255,255,255,0.85)', // Texto principal
          low: '#86868B', // Secundario/descripciones
        },
        accent: {
          primary: '#3AD1FF',
          secondary: '#E86BC5',
        },
        border: {
          DEFAULT: '#38383A', // Stroke sutil para dar existencia
        }
      },
      boxShadow: {
        'elevation-1': '0 4px 12px rgba(0,0,0,0.28)',
      },
      blur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
      },
      borderRadius: {
        mdx: '14px',
        xl2: '24px',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
