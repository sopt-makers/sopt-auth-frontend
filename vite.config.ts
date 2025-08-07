import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './') }],
  },
  build: {
    outDir: 'accounts',
  },

  base: mode === 'production' ? '/accounts/' : '/',
}));
