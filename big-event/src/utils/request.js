//基于axios封装
import axios from "axios";


//axios.create()创建一个带配置的自定义axios函数
// AXIOS请求的时候，地址baseURL+url，然后去请求后台
const baseURL = '/api'
const instance = axios.create({baseURL})

// 添加响应拦截器
instance.interceptors.response.use(
	// 判断业务状态码
	result => {
		if (result.data.code === 0) {
			return result.data;
		}

		//操作失败
		// 异步操作的状态返回失败
		return Promise.reject(result.data);
	},
	error => {
		alert('服务异常1')
		return Promise.reject(error)
	}
)

export default instance
