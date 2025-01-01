import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// Function to get all entry points from the pages directory
function getPageEntries(dir: string) {
  const entries: { [key: string]: string } = {};
  fs.readdirSync(dir).forEach((folder) => {
    const fullPath = resolve(dir, folder, 'index.tsx');
    if (fs.existsSync(fullPath)) {
      entries[folder] = fullPath;
    }
  });
  return entries;
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getPageEntries(resolve(__dirname, 'src/pages')),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@src': resolve(__dirname, 'src'),
      '@a': resolve(__dirname, 'src/assets'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@c': resolve(__dirname, 'src/components'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
  optimizeDeps: {
    include: [
      'framer-motion',
      'motion'
    ],
  },
});
