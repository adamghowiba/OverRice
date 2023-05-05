import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  optimizeDeps: {
  },
  plugins: [sveltekit()],
};

export default config;
