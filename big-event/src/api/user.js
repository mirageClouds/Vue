// 封装的是具体的接口请求方法
//每个方法只负责请求一个url地址
import request from "@/utils/request";

// 解构赋值
// 形参obj的值
// obj = {username:'',password:''}
// 左侧想要对象的结构赋值(语法↓)
// {username:username变量名,password:password变量名} = {username:'',password:''}
// 函数形参的obj就改成对象解构接收传入的值
// {username:username,password:password}
// key是传入的对象key匹配，value是变量名,用于接收外面传入的值
// ES6规定，key和value变量同名的时候，可以简写(key既可以为key也可以是value变量名)

export const userRegisterService = (username, password) => {
	return request({
		method: "POST",
		url: "/user/register",
		// params的对象参数名，axios会吧参数和值凭接在url?后面给后台
		// data的对象参数名和值，axios会把参数和值拼接在请求体里(body)
		params: {
			username, password,
		}
	})
}

export const userLoginService = (username, password) => {
	return request({
		method: "POST",
		url: "/user/login",
		params: {
			username, password
		}
	})
}

export const userInfoService = (token) => {
	return request({
		method: "GET",
		url: "/user/userInfo",
		headers: {
			token: token
		}

	})
}
