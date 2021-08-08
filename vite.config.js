// vite.config.js
export default {
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