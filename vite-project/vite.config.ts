import { defineConfig } from 'vite';

// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [createVuePlugin(/* options */)],
});
