import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    storybookTest({ 
      configDir: path.join(dirname, '.storybook'),
      storybookUrl: 'http://localhost:6006',
    }),
  ],
  test: {
    name: 'storybook',
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright,
      instances: [
        { browser: 'chromium' }
      ],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
  define: {
    'process.env': {},
  },
});
