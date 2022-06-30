<template>
	<!-- 发送框 -->
		<free-popup :disabled='true' ref='confirm' center maskColor transformOrigin="center center">
			<view class="bg-white rounded-2" style="width: 600rpx;">
				<!-- 头部 -->
				<view class="p-4 flex flex-column">
					<text class="font mb-3 mt-4 font-weight-bold">{{title}}</text>
					<slot></slot>
				</view>
				
				<!-- 底部 -->
				<view class="border-top  flex align-stretch" style="height: 100rpx;">
					<view @click="cancel" class="flex-1 flex align-center justify-center border-right">
						<text class="font font-weight-bold" >取消</text>
					</view>
					<view  @click="confirm" class="flex-1 flex align-center justify-center">
						<text class="font font-weight-bold main-text-color">发送</text>
					</view>
				</view>
			</view>
		</free-popup>
	
</template>

<script>
	import freePopup from "@/components/free-ui/free-popup.vue"
	export default {
		components: {
			freePopup,		
		},
		props:{
			title:{
				type:String,
				default:"提示"
			},
		},
		data(){
			return{
				callback:false
			}
		}, 
		methods:{
			// 显示事件
			show(callback=false){
				this.callback=callback
				this.$refs.confirm.show()
			}, 
			
			// 取消
			cancel(){
				this.$refs.confirm.hide()
			},
			// 确定
			confirm(){
				if(typeof this.callback ==='function'){
					this.callback(()=>{
						this.cancel()
					})
				}
			}
		}
	}
</script>

<style>
</style>
