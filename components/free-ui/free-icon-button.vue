<template>
	<view class="flex justify-center align-center" 
	style="height: 90rpx; width: 80rpx;" @click="$emit('click')">
		<text class="iconfont" :class="iconfontSize">{{icon}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			icon:{
				type:String,
				default:''
			},
			iconfontSize:{
				type:String,
				default:'font-md'
			}
		}
	}
</script>

<style>
</style>
