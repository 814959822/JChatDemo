import $U from "@/common/free-lib/util.js"
export default {
	onShow() {
		let token = $U.getStorage('token')
		if (!token) {
			return uni.reLaunch({
				url: '/pages/common/login/login'
			})
		}
		
	},
	methods: {
		//返回并提示
		backToast(mas='非法参数') {
			uni.navigateBack({
				delta: 1,
			})
			return uni.showToast({
				title: msg
			})
		},
		navigate(path){

			uni.navigateTo({
				url:'/pages/'+path,
			})
		},

	}
}
