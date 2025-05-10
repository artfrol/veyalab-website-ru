
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => {
  // кастомный хост из env или дефолтный
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

  return {
    base: "./",
    server: {
      host: "::",
      port: 8080
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      {
        name: 'copy-index-to-404',
        closeBundle: () => {
          fs.copyFileSync('dist/index.html', 'dist/404.html');
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
