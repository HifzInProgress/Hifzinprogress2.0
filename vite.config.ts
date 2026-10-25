import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          journey: path.resolve(__dirname, 'journey.html'),
          hifzGuide: path.resolve(__dirname, 'hifz-guide.html'),
          hifzPlanner: path.resolve(__dirname, 'hifz-planner.html'),
          resources: path.resolve(__dirname, 'resources.html'),
          tracker: path.resolve(__dirname, 'tracker.html'),
          about: path.resolve(__dirname, 'about.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
