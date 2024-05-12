const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: true,
	devServer: {
		proxy: {
			'api': {
				target: 'http://localhost:8086',
				changeOrigin: true,
				pathRewrite: {'^/api': '/'}
			}

		},
	}
})
