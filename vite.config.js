import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  optimizeDeps: {
    exclude: ['@sveltestack/svelte-query']
  },
  plugins: [sveltekit()],
};

export default config;
