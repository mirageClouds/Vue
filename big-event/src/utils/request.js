//基于axios封装
import axios from "axios";


//axios.create()创建一个带配置的自定义axios函数
// AXIOS请求的时候，地址baseURL+url，然后去请求后台
const AXIOS = axios.create({
	baseURL: 'http://localhost:8080',
})
export default AXIOS
