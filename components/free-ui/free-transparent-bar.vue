<template>
	<view>
		<view class="fixed-top" style="z-index: 800;" :style="navBarStyle">


			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-center" style="height: 90rpx;">
				<!-- left -->
				<view style="position: absolute;left: 0;" class="flex align-center">
					<!-- 返回按钮 -->
					<view class="flex justify-center align-center" hover-stay-time='50'  hover-start-time='0' hover-class="text-hover-light"
						style="height: 90rpx; width: 80rpx;" @click='back'>
						<text class="iconfont font-md" :style="buttonStyle">&#xe610;</text>
					</view>
				</view>
				<!-- 标题 -->
				<text v-if="title" :style="titleStyle" class="font-weight-bold font-md">{{title}}</text>

				<!-- right -->
				<view v-if="isShowRight" style="position: absolute;right: 0;" class="flex align-center mr-1">
					<view @click="$emit('clickRight')" class="flex justify-center align-center"  hover-stay-time='50'  hover-start-time='0' hover-class="text-hover-light"
						style="height: 90rpx; width: 80rpx;">
						<text class="iconfont font-max" :style="buttonStyle">&#xe61a;</text>
					</view>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		props: {
			title: {
				type: [String, Boolean],
				default: false
			},
			scrollTop: {
				type: [Number, String],
				default: 0
			},
			isShowRight:{
				type:Boolean,
				default: true
			}
		},
		
		data() {
			return {
				statusBarHeight: 0,
				navBarHeight: 0
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)

		},
		watch:{
			changeNumber(newName, oldName){
				// #ifdef APP-PLUS-NVUE
				if(this.changeNumber>0){
					plus.navigator.setStatusBarStyle("dark");
				}else{
					plus.navigator.setStatusBarStyle("light");
				}
				// #endif
			}
		},
		computed: {
			startNumber() {
				let start = uni.upx2px(400)
				let end = uni.upx2px(440)
				let H = end - start
				let num = 0
				if (this.scrollTop > start) {
					num = (this.scrollTop - start) / H
				}
				return num > 1 ? 1 : num
			},
			changeNumber() {

				let start = uni.upx2px(460)
				let end = uni.upx2px(500)
				let H = end - start
				let num = 0
				if (this.scrollTop > start) {
					num = (this.scrollTop - start) / H
				}
				return num > 1 ? 1 : num
			},
			navBarStyle() {
				return `background-color: rgba(237,237,237,${this.changeNumber});`
			},
			buttonStyle() {
				if (this.startNumber > 0&&this.changeNumber === 0) {
					return `color: rgba(255,255,255,${1-this.startNumber});`
				}
				if (this.startNumber > 0&&this.changeNumber > 0) {
					return `color: rgba(0,0,0,${this.changeNumber});`
					
				}
				  
				return 'color:#fff'
			},
			titleStyle() {
				return `color: rgba(0,0,0,${this.changeNumber});`

			}
		},
		methods: {
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.freePopup::before {
		position: absolute;
		right: 40rpx;
		content: '';
		width: 0;
		height: 0;
		margin-top: -40rpx;
		border: 20rpx solid transparent;
		border-bottom-color: #343a40;
		;

	}
</style>
