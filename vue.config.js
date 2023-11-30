const { defineConfig } = require('@vue/cli-service')
require("dotenv").config();

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 8081,
    proxy: {
      '/api': { 
        target: process.env.BASE_URL,
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
