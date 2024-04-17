const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// 停止语法检查
	lintOnSave: false,
})
