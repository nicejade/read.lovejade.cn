// vite.config.js
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default {
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: '@nutui/nutui',
        libraryNameChangeCase: 'pascalCase',
        resolveStyle: (name) => {
          return `@nutui/nutui/dist/packages/${name}/index.scss`
        }
      }
    ],
  }),],

  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },

  server: {
    port: 3000,
    open: true,
    base: "./ ",
    proxy: {
      '^/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}