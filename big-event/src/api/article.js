import request from "@/utils/request";

export const articleCategoryService = (token) => {
	return request({
		url: "/category",
		method: "get",
		headers: {
			token: token
		}
	})
}
