import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Vercel Build Configuration
  build: {
    outDir: 'dist', // Vercel expects this output directory by default
    rollupOptions: {
      input: '/public/index.html', // Make sure Vite knows where the HTML entry point is
    },
  },

  // Vercel Proxy Settings (if needed during development)
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Adjust the proxy to the backend API if needed
    },
  },

  // Optional: Base path for deployment if you are deploying to a subdirectory
  base: '/', // Use '/' if your app is deployed at the root, adjust if needed for subpath deployments
});
