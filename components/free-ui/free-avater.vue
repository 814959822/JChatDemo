<template>
	<image @click="clickEvent" :class="type" :src="src?src:avatar" mode="aspectFill" :style="getStyle">
	</image>
</template>

<script>
	export default {
		props: {
			size: {
				type: [String, Number],
				default: 90
			},
			src: {
				type:String,
				default: ""
			},
			type: {
				type: String,
				default: "rounded-2"
			},
			clickType:{
				type: String,
				default: "none"
			},
			chatType:{
				typeof:String,
				default: "user"
			}
		},
		computed: {
			getStyle() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			},
			avatar(){
				return this.chatType==='user'?'/static/images/userpic.png':'/static/images/groupavatar.png'
			}
		},
		methods:{
			clickEvent(){
				switch (this.clickType){
					case 'navigate':
					uni.navigateTo({
						url:'/pages/mail/user-base/user-base'
					})
						break;
					default:
					this.$emit('click')
						break;
				}
			},
			
		}
	}
</script>

<style>
</style>
