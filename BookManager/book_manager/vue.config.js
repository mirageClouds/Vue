const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// 停止语法检查
	lintOnSave: false,
	//配置反向代理
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8092/BookManager/',
				pathRewrite: {'^/api': ''}
			}
		}
	}
})
