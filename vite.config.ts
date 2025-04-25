
import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [reactSwc()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: ['.blink.new'],
  }
});