import vercel from '@sveltejs/adapter-vercel';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
    vite: {
      plugins: [
        WindiCSS(),
      ]
    }
  },
};

export default config;
