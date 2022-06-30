<template>
	<!-- 发送按钮 -->
	<view @click="clickEvent" :class="disabled?'bg-secondary':'main-bg-color'" class="mr-2 px-3 rounded"
		style="padding-top: 15rpx;padding-bottom: 15rpx;white-space: nowrap;">
		<text class="font" :class="disabled?'text-secondary':'text-white'">{{name}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			clickEvent(){
				if(!this.disabled){
					this.$emit('click')
				}
			}
		}
	}
</script>

<style>
</style>
