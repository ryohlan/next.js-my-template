module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          930: '#141414',
          990: '#0c0c0c',
        },
      },
      borderWidth: {
        0.5: '0.5px',
      },
      keyframes: {
        'hint-focused': {
          '0%': {
            transformOrigin: 'top left',
            transform: 'translate(0,0) scale(1)',
          },
          '100%': {
            transformOrigin: 'top left',
            transform: 'translate(-4px,-10px) scale(0.65)',
          },
        },
        'hint-blur': {
          '0%': {
            transformOrigin: 'top left',
            transform: 'translate(-4px,-10px) scale(0.65)',
          },
          '100%': {
            transformOrigin: 'top left',
            transform: 'translate(0,0) scale(1)',
          },
        },
      },
      animation: {
        'form-hint-focus': 'hint-focused 0.2s ease-in-out both',
        'form-hint-blur': 'hint-blur 0.2s ease-in-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
