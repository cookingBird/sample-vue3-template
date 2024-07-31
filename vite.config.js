import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const { VITE_APP_BASE_URL } = loadEnv(mode, process.cwd());
  return {
    base: VITE_APP_BASE_URL,
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: false,
        },
      }),
      Components({
        resolvers: [],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
