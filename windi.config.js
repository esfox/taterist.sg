import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        hover: {
          light: 'var(--color-hover-light)',
          dark: 'var(--color-hover-dark)',
        },
      },
    },
  },
});
