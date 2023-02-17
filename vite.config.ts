import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteRequire } from 'vite-require'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteCommonjs(), ],

  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildCommonjs(['simple-plist', 'stream-buffers']),
      ],
    },
  },
})
