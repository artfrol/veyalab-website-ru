import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  // кастомный хост из env или дефолтный
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

  return {
    base: "./",
    
    plugins: [
      react(),
      {
        name: 'copy-index-to-404',
        closeBundle: () => {
          fs.copyFileSync('dist/index.html', 'dist/404.html');
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});