import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import axios from "axios";

/*
* 定义store
* defineStore(仓库的唯一表示,()=>{})
* */
export const userCounterStore = defineStore('counter', () => {
// 	声明数据state
	const count = ref(0)
// 	声明操作方法action
	const addCount = () => count.value++
	const sub = () => count.value--
// 	声明基于数据派生的计算属性getters
	const double = computed(() => count.value * 2)

	return {
		count, addCount, sub, double
	}
})


/*
* action异步实现
* */

export const userChannelStore = defineStore('channel', () => {
	const channelList = ref([])
	const getList = async () => {
		const {data: {data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
		channelList.value = data.channels
		console.log(data.channels)
	}
	return {
		channelList, getList
	}
})
