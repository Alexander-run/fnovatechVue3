import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  alias: {
    '@': require('path').resolve(__dirname, './src')
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}