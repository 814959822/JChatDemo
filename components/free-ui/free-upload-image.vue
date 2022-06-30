<template>
	<view class="w-100">
		<!-- 图文 -->
		<view class="flex flex-wrap">
			<view v-for="(item,index) in imageList" :key="index"  class="flex align-center position-relative justify-center pt-2" style="width: 230rpx;">
				<image class="bg-light rounded" style="width: 210rpx;height: 210rpx;" mode="aspectFill" :src="item"></image>
				<view class="flex align-center rounded-circle position-absolute justify-center" style="width: 50rpx; height: 50rpx;top: 10rpx;right: 0;background-color: rgba(0, 0, 0, .5);" @click="deleteImage(item)">
					<text class="iconfont text-white font-small">&#xe614;</text>
				</view>
			</view>
			<view v-if="imageList.length<9" @click="chooseImage" style="width: 230rpx;"
				class="flex align-center pt-2 justify-center">
				<view style="width: 210rpx;height: 210rpx;" class="flex align-center justify-center rounded bg-light">
					<text style="font-size: 100rpx;" class="text-light-muted">+</text>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $H from "@/common/free-lib/request.js"
	export default {
		props: {
			data: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				imageList: []
			}
		},
		mounted() {
			this.imageList = this.data
		},
		methods: {
			// 选择图片
			chooseImage() {
				uni.chooseImage({
					count: 9 - this.imageList.length,
					sizeType: ['compressed'],
					success: (res) => {
						// 上传
						res.tempFilePaths.forEach(path=>{
							$H.upload('/upload',{
								filePath:path
							},(progress)=>{
								// console.log('上传进度',progress);
							}).then(url=>{
								this.imageList.push(url)
								this.$emit('updata', this.imageList)
							})
						})    
					}
				})
			},
			// 预览图片
			preview(item){
				uni.previewImage({
					current:item,
					urls:this.imageList
				})
			},
			// 删除图片
			deleteImage(item){
				uni.showModal({
					content:'是否删除该图片?',
					success:(res)=>{
						if(res.confirm){
							let index = this.imageList.findIndex(url=>url===item)
							if(index !== -1){
								this.imageList.splice(index,1)
								this.$emit('updata', this.imageList)
							}
						}
					}
				})
				
			}
		}
	}
</script>

<style>
</style>
