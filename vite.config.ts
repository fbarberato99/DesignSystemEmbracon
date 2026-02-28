import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
  // Configuração para desenvolvimento (npm run dev)
  if (command === 'serve') {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
    }
  }
  
  // Configuração para build da biblioteca (npm run build)
  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        include: ['src/**/*.ts', 'src/**/*.vue'],
        exclude: ['src/main.ts', 'src/App.vue'],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'EmbraconDesignSystem',
        formats: ['es', 'umd'],
        fileName: (format) => `embracon-design-system.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css'
            return assetInfo.name || ''
          },
        },
      },
    },
  }
})
