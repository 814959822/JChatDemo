<template>
	<view style="z-index:9998; overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<view @click="clickHide" v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0 z-index" :style="getMaskColor">
		</view>
		<!-- 弹出框 -->
		<div ref="popup" class="position-fixed z-index free-animated" :class='getBodyClass' :style='getBodyStyle'>
			<slot></slot>
		</div>
	</view>
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	
	export default {
		props: {
			// 是否开启mask颜色
			maskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: true
			},
			// 是否处于底部
			fixedBottom: {
				type: Boolean,
				default: false
			},
			// 弹出层内容宽度
			bodyWidth: {
				type: Number,
				default: 0
			},
			// 弹出层内容高度
			bodyHeight: {
				type: Number,
				default: 0
			},
			bodyBgColor:{
				type:String,
				default:"bg-white"
			},
			// 动画位置
			transformOrigin:{
				type:String,
				default:"left top"
				
			},
			// 是否居中
			center:{
				type: Boolean,
				default: false
			},
			// 其他高度
			tabbarHeight:{
				type:Number,
				default:0
			},
			// 蒙版是否可以点击
			disabled:{
				type:Boolean,
				default:false
			}

		},
		data() {
			return {
				status: false,
				y: -1,
				x: -1,
				maxX: 0,
				maxY: 0
			}
		},
		mounted() {
			try {
				const res = uni.getSystemInfoSync()
				this.maxX = res.windowWidth - uni.upx2px(this.bodyWidth)
				this.maxY = res.windowHeight - uni.upx2px(this.bodyHeight)-uni.upx2px(this.tabbarHeight)
			} catch (e) {
				//TODO handle the exception
			}
		},
		computed: {
			getMaskColor() {
				let i = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0,0,0,${i});`
			},
			getBodyClass() {
				if(this.center){
					return 'left-0 right-0 bottom-0 top-0 flex align-center justify-center'
				}
				let fixedBottom = this.fixedBottom ? 'left-0 right-0 bottom-0' : 'border shadow rounded-2'
				return `${this.bodyBgColor} ${fixedBottom}`
			},
			getBodyStyle() {
				let top = this.y > -1 ? `top:${this.y}px;` : ''
				let left = this.x > -1 ? `left:${this.x}px;` : ''
				return top + left
			}
		},
		methods: {
			clickHide(){
				if(!this.disabled){
					this.hide()
				}
			},
			show(x = -1, y = -1) {
				this.x = (x > this.maxX) ? this.maxX : x
				this.y = (y > this.maxY) ? this.maxY : y
				this.status = true
				
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(() => {
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(1,1)',
							transformOrigin: this.transformOrigin,
							opacity: 1
						},
						duration: 100,
						timingFunction: 'ease-in-out',
					}, ()=>{
						
					})
				})
				// #endif
				// #ifndef APP-PLUS-NVUE
				this.status=true
				// #endif
				

			},
			hide() {
				this.$emit('hide')
				// #ifdef APP-PLUS-NVUE
				this.$nextTick(() => {
					animation.transition(this.$refs.popup, {
						styles: {
							transform: 'scale(0.7,0.7)',
							transformOrigin: this.transformOrigin,
							opacity: 0.1
						},
						duration: 100,
						timingFunction: 'linear',
					}, ()=> {
						this.status=false
						// console.log('adad')
					})
				})
				// #endif
				// #ifndef APP-PLUS-NVUE
				this.status=false
				// #endif
				
			}
		}
	}
</script>

<style scoped>
	.free-animated {
		/* #ifdef APP-PLUS-NVUE */
		transform: scale(0, 0);
		opacity: 0;
		/* #endif */
	}
	.z-index{
		/* #ifndef APP-PLUS-NVUE */
		z-index: 999;
		/* #endif */
		
	}
</style>
