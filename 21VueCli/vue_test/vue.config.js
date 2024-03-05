const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	//转es5语法时忽略node_modules
	transpileDependencies: true,
	// 停止代码检查
	lintOnSave: false
})
