import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        png: { quality: 75 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        gif: { optimizationLevel: 3 },
        svg: { svgo: true },
        logStats: true,
        optimizeImagesInDev: true,
      }),
    ],
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
      outDir: 'dist',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            if (/\.(png|jpe?g|gif|svg)$/.test(name)) {
              return 'img/[name]-[hash][extname]';
            }
            if (/\.(woff2?|ttf|otf)$/.test(name)) {
              return 'fonts/[name][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    base: './',
    assetsInclude: ['**/*.json', '**/*.svg'],
  };
});
