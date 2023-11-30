const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 8081,
    proxy: {
      '/api': { 
        target: 'http://localhost:8080',
        changeOrigin: true,
      }, 
    },
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
