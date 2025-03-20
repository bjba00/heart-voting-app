import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Optional: Customize the build directory if needed
  build: {
    outDir: 'dist', // Default build output directory for Vercel
    rollupOptions: {
      input: '/public/index.html', // Explicit input path for index.html (should be in public folder)
    },
  },

  server: {
    proxy: {
      '/api': 'http://localhost:5000', // For local API proxy, if necessary
    },
  },
});

export default {
  base: './',
};
