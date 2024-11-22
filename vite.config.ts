import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@apis', replacement: '/src/apis' },
    ],
  },
});
