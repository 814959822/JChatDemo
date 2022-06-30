<script>
	export default {
		onLaunch: function() {
			plus.navigator.closeSplashscreen()
			// #ifdef APP-PLUS-NVUE
			// 加载图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': 'iconfont',
				'src': "url('https://at.alicdn.com/t/font_3221738_lf9tbkrdiym.ttf')"
			})
			// #endif
			// 初始化录音管理器
			this.$store.commit('initRECORD')
			//初始化登陆状态
			this.$store.dispatch('initLogin')
			// console.log('App Launch')
			// 监听键盘高度
			//  uni.onKeyboardHeightChange(res => {
			// 	this.$store.commit('changeKeyboardHeight',res.height)

			// })
			uni.navigateTo({
				url:'./pages/common/wecome/wecome'
			})
		},
		onShow: function() {
			this.$store.dispatch('reconnect')
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	@import "./common/free.css";
	@import "./common/common.css";
	/* #ifndef APP-PLUS-NVUE */
	@import "./common/free-icon.css";

	/* #endif */
	/* #ifdef MP */
	::-webkit-scrollbar {
		display: none;
	}

	/* #endif */
	/*每个页面公共css */
</style>
