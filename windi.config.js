import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      screens: {
        sm: '500px'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          light: 'var(--color-secondary-light)',
        },
        hover: {
          light: 'var(--color-hover-light)',
          dark: 'var(--color-hover-dark)',
        },
      },
    },
  },
});
