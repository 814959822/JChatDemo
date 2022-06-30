<template>
	<div class='px-25'>


		<!-- 时间显示 -->
		<view v-if="showTime" class="flex justify-center align-center pb-4 pt-2">
			<text style="font-size: 24rpx;" class="text-muted">{{showTime}}</text>
		</view>
		<!-- 显示撤回	 -->
		<view v-if='item.isremove' ref='isremove' class="flex justify-center align-center pb-4 pt-1">
			<text class="font-sm text-light-muted">{{isself? '你':`"${item.from_name}" `}}撤回了一条消息</text>
		</view>
		<!-- 系统消息 -->
		<view v-if='item.type==="system"' ref='isremove' class="flex justify-center align-center pb-4 pt-1">
			<text class="font-sm text-light-muted">{{item.data}}</text>
		</view>
		<!-- 气泡 -->
		<view v-if='item.type!=="system"&&!item.isremove' :class="isself?'justify-end':'justify-start'"
			class="flex mb-2 position-relative align-start ">
			<!-- 好友	 -->
			<template v-if="!isself">
				<!-- 头像 -->
				<free-avater @click='openUser' size='80' :src="item.from_avatar"></free-avater>
				<!-- 小三角icon -->
				<text v-if="hasLabelClass"
					class="chat-left-icon iconfont position-absolute text-white font-md" :style="shownickname?'top:58rpx':'top:26rpx'">&#xe602;</text>
			</template>

			<view class="flex flex-column">
				<!-- 昵称 -->
				<view v-if="shownickname&&!isself" @longpress='long' :style='labelStyle' style="max-width:500rpx;background-color: rgba(0, 0, 0, 0);height: 34rpx "
					class="flex bg-danger align-center justify-start ml-2">
					<text style="font-size: 22rpx; ;" class="font-sm text-muted">  {{item.from_name}}</text>
				</view>

				<div @longpress='long' :style='labelStyle' :class="labelClass" style="max-width:500rpx;width: fit-content;"
					class="rounded">
					<!-- 文字消息 -->
					<text v-if="item.type==='text'" class="font-md">{{item.data}}</text>

					<!-- 表情包||图片 -->
					<free-image @click="preview(item.data)" @longpress="stop" :imageClass="imageClass"
						v-else-if="item.type==='emoticon'||item.type==='image'" :src="item.data" :maxHeight="350"
						:maxWidth="300"></free-image>

					<!-- 音频 -->
					<view @tap="openAudio" @longpress="stop" v-if="item.type==='audio'" class="flex align-center">
						<image v-if="isself" style="width: 50rpx;height: 50rpx;" class="mx-1"
							:src="!audioPlaying?'/static/audio/audio3.png':'/static/audio/play.gif'" mode=""></image>
						<text class="font">{{item.options.time+'"'}}</text>
						<image v-if="!isself" style="width: 50rpx;height: 50rpx;" class="mx-1"
							:src="!audioPlaying?'/static/audio/audio3.png':'/static/audio/play.gif'" mode=""></image>

					</view>

					<!-- 视频 -->
					<view @tap="onpenVideo" @longpress="stop" class="position-relative  rounded" v-else-if="item.type==='video'">
						<free-image @load='loadPoster' imageClass="rounded border bg-hover-light border-light-secondary"
							:src="item.options.poster" :maxHeight="350" :maxWidth="300">
						</free-image>
						<text :style="posterIconStyle" class="iconfont text-white position-absolute"
							style="font-size: 80rpx;width: 80rpx;height: 80rpx;">&#xe60b;</text>
					</view>
					
					<!-- 名片 -->
					<view @tap="openUserBase" @longpress="stop" v-else-if="item.type==='card'"  hover-stay-time='50'  hover-start-time='0' hover-class="bg-hover-light" class="bg-white rounded" style="width: 400rpx;">
						<view class="p-3 flex align-center">
							<free-avater size='80' :src="item.options.avatar"></free-avater>
							<view class="flex-column flex">
								<text class="font ml-2">{{item.data}}</text>
								<text class="font-small text-light-muted  ml-2">{{item.options.username}}</text>
							</view>
							
						</view>
						<view class="flex align-center py-1 border-top border-light-secondary  mx-2">
							<text class="font-small text-muted">个人名片</text>
						</view>
					</view>
				</div>
			</view>

			<!-- 本人 -->
			<template v-if="isself">
				<text v-if="hasLabelClass"
					style="top:26rpx" class="chat-right-icon iconfont position-absolute text-chat-item font-md">&#xec1d;</text>

				<free-avater @click='openUser' size='80' :src="user.avatar"></free-avater>

			</template>
		</view>

		<view v-if="item.sendStatus&&item.sendStatus!=='success'&&!item.isremove" class="flex align-center justify-end px-4">
			<text class="font-sm "
				:class="item.sendStatus==='pending'?'text-muted':'text-danger'">{{item.sendStatus==='pending'?'发送中...':'发送失败'}}</text>
		</view>
	</div>
</template>

<script>
	// import $H from "@/common/free-lib/request.js"
	import freeImage from "@/components/free-ui/free-image.vue"
	import $T from "@/common/free-lib/time.js"
	import freeAvater from "@/components/free-ui/free-avater.vue"
	import {
		mapState,
		mapActions
	} from "vuex"
	export default {
		data() {
			return {
				innerAudioContext: null,
				audioPlaying: false,
				// 默认封面宽高
				poster: {
					w: 100,
					h: 100
				},
				detail:{}
			}
		},

		props: {
			item: Object,
			index: Number,
			pretime: [Number, String],
			shownickname:{
				type:Boolean,
				default:false
			}
		},
		components: {
			freeAvater,
			freeImage
		},
		computed: {
			...mapState({
				user: state => state.user.user
			}),
			labelStyle() {
				if (this.item.type === 'audio') {
					let time = this.item.options.time || 0
					let width = parseInt(time) / (60 / 500)
					width = width < 150 ? 150 : width
					return `width:${width}rpx;`
				}

			},
			// 图片边框
			imageClass() {
				let border = (this.item.type === 'emoticon') ? `` : 'bg-hover-light border border-light-secondary'
				return `${border} rounded`
			},
			// 视频播放按钮
			posterIconStyle() {
				let w = this.poster.w / 2 - uni.upx2px(80) / 2
				let h = this.poster.h / 2 - uni.upx2px(80) / 2
				return `;left:${w}px;top:${h}px;`
			},
			// 发送者是否本人
			isself() {
				// 本人id获取
				let id = this.user.id ? this.user.id : 0
				
				return this.item.from_id === id
			},
			
			// 显示时间
			showTime() {
				return $T.getChatTime(this.item.create_time, this.pretime)
			},
			// 是否需要气泡样式
			hasLabelClass() {
				return this.item.type === 'text' || this.item.type === 'audio'
			},
			// nicknameClass(){
			// 	let c = this.isself?'justify-end':''
			// 	return c+" "+this.labelClass
			// },
			// 气泡样式
			labelClass() {
				let tolabel = this.hasLabelClass ? 'bg-white ml-2 p-2' : ' ml-2'
				let label = this.hasLabelClass ? 'bg-chat-item mr-2 p-2' : ' mr-2'
				return this.isself ? label : tolabel
			},
			// avatar(){
			// 	if(this.item.avatar!==this.detail.avatar){
			// 		this.item.avatar=this.detail.avatar
			// 	}
			// 	return this.item.avatar
			// }
		},
		mounted() {
			
			if (this.item.type === 'audio') {
				this.audioOn(this.onPlayAudio)
			}

			// #ifdef APP-PLUS-NVUE
			this.$watch('item.isremove', (newVal, oldVal) => {
				if (newVal) {

					const animation = weex.requireModule('animation')

					this.$nextTick(() => {
						animation.transition(this.$refs.isremove, {
							styles: {
								opacity: 1
							},
							duration: 100,
							timingFunction: 'ease',
						}, () => {
							// console.log('adad')
						})
					})

				}

			})
			// #endif
			// this.getData()
		},
		// 组件销毁
		destroyed() {
			if (this.item.type === 'audio') {
				this.audioOff(this.onPlayAudio)
			}
			//销毁音频
			if (this.innerAudioContext) {
				this.innerAudioContext.destroy()
				this.innerAudioContext = null
			}
		},
		methods: {
			...mapActions(['audioOn', 'audioEmit', 'audioOff']),
			// getData() {
			// 	$H.get('/friend/read/' + this.item.from_id).then(res => {
					
			// 		this.detail = res
			// 		console.log(this.detail)
			// 	})
			// },
			// 点击头像
			stop(){
				
			},
			openUser(){
				uni.navigateTo({
					url:"/pages/mail/user-base/user-base?user_id="+this.item.from_id
				})
			},
			// 打开名片
			openUserBase(){
				uni.navigateTo({
					url:'/pages/mail/user-base/user-base?user_id='+this.item.options.id
				})
			},
			// 打开视频
			onpenVideo() {
				uni.navigateTo({
					url: '/pages/chat/video/video?url=' + this.item.data,

				})

			},
			// 加载封面封面
			loadPoster(e) {
				this.poster.h = e.h
				this.poster.w = e.w
			},
			// 监听播放音频事件
			onPlayAudio(index) {
				// console.log("当前播放索引" + index)
				if (this.innerAudioContext) {
					if (this.index !== index) {
						this.innerAudioContext.pause()
					}

				}
			},
			// 播放音频
			openAudio() {

				this.audioEmit(this.index)

				if (!this.innerAudioContext) {
					this.innerAudioContext = uni.createInnerAudioContext()
					this.innerAudioContext.src = this.item.data
					this.innerAudioContext.play()
					// 监听播放
					this.innerAudioContext.onPlay(() => {
						this.audioPlaying = true
					})
					// 监听暂停
					this.innerAudioContext.onPause(() => {
						this.audioPlaying = false
					})
					// 监听停止
					this.innerAudioContext.onStop(() => {
						this.audioPlaying = false
					})
					// 监听错误
					this.innerAudioContext.onError(() => {
						this.audioPlaying = false
					})

				} else {
					this.innerAudioContext.stop()
					this.innerAudioContext.play()
				}
			},
			// 预览图片
			preview(url) {
				this.$emit('preview', url)

			},
			// 长按
			long(e) {
				if(this.item.isremove){
					return
				}
				let x = 0
				let y = 0
				// #ifdef APP-PLUS-NVUE
				if (Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {

					x = e.changedTouches[0].screenX
					y = e.changedTouches[0].screenY
				}
				// #endif
				// #ifdef H5
				x = e.changedTouches[0].pageX
				y = e.changedTouches[0].pageY
				// #endif
				// #ifdef MP
				x = e.detail.x
				y = e.detail.y
				// #endif
				this.$emit('long', {
					x,
					y,
					index: this.index
				})
			}
		}
	}
</script>

<style scoped>
	.chat-left-icon {
		left: 82rpx;	
	}

	.chat-right-icon {
		right: 82rpx;
	}

	.chat-animate {
		// #ifdef APP-PLUS-NVUE
		opacity: 0;
		// #endif
	}
</style>
