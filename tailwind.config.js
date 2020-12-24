module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2d3748',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: '#f7fafc',
        secondary: 'var(--color-text-secondary)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
