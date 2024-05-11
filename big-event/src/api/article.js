import request from "@/utils/request";

export const selectCategoryService = (token) => {
	return request({
		url: "/category",
		method: "get",
		headers: {
			token: token
		}
	})
}

export const addCategoryService = (token, categoryName) => {
	return request({
		method: "POST",
		url: "/category",
		headers: {
			token: token
		},
		params: {
			categoryName: categoryName
		}
	})
}
