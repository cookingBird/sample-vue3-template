import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

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
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            // importStyle: false,
          }),
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
