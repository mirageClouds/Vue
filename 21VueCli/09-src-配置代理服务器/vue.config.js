const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    //转es5语法时忽略node_modules
    transpileDependencies: true,
    // 停止代码检查
    lintOnSave: false,
    // 开启反向代理(方式一)
    // devServer:{
    // 	proxy:'url'
    // }
    devServer: {
        proxy: {
            '/api': { //请求前缀,匹配所有以'/api'开头的请求路径
                target: 'url', //请求转发的地址，代理的基础路径
                PathRewrite: {'^/api': ''}//重写请求路径
                // ws:true, //用于支持websocket
                // changeOrigin:true //用于控制控制头中的host值
            },
            'foo': {
                target: 'url'
            }
        }
    }
})
