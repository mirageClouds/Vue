export const mixin = {
	computed: {
		title() {
			return this.$route.meta.title
		}
	}
}
