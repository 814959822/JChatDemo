<template>
	<!-- 导航栏 -->
	<view>
		<view style="z-index: 800;" :class="getCalss">


			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view v-if='showNavbar' class="w-100 flex align-center justify-center" style="height: 90rpx;">
				<!-- left -->
				<view style="position: absolute;left: 0;" class="flex align-center">
					<!-- #ifndef MP -->
					<!-- 返回按钮 -->
					<free-icon-button v-if="showBack" @click='back' :icon="'\ue610'"></free-icon-button>
					<!-- #endif -->

				</view>
				<!-- 标题 -->
				<text v-if="title" class="font-weight-bold font-md">{{getTitle}}</text>

				<!-- right -->
				<view v-if="showRight" style="position: absolute;right: 0;" class="flex align-center mr-2">
					<slot name="right">
						<free-icon-button iconfontSize='font-lg' @click='search' :icon="'\ue61e'"></free-icon-button>
						<free-icon-button iconfontSize='font-lg' @click='openExtend' :icon="'\ue74a'">
						</free-icon-button>

					</slot>

				</view>
			</view>
			<slot name="bottom"></slot>
			<slot name="maskBottom"></slot>
		</view>

		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle"></view>

		<!-- 扩展菜单 -->
		
		<free-popup v-if="showRight" bodyBgColor='bg-light-dark border-0' transformOrigin="right top" ref="extend" :bodyWidth="300" 
			:bodyHeight="525">
			<view class="">
			<view class="flex flex-column rounded" style="width:300rpx;height: 525rpx;"> 
				<view v-for="(item,index) in menus" :key="index" class="flex-1 flex align-center"
					@click='clickEvent(item)' hover-stay-time='50' hover-start-time='0' hover-class="bg-hover-dark">
					<text  class="iconfont  pl-4 pr-3 font-lg text-white">{{item.icon}}</text>
					<text class="font font-weight-bold text-white">{{item.name}}</text>
				</view>

			</view>
			</view>
		</free-popup>

	</view>

</template>

<script>
	import $H from "@/common/free-lib/request.js"
	import freeIconButton from "./free-icon-button.vue"
	import freePopup from "./free-popup.vue"
	export default {
		props: {
			showBack: {
				type: Boolean,
				default: false
			},
			title: {
				type: [String, Boolean],
				default: false
			},
			fixed: {
				type: Boolean,
				default: true
			},
			noreadnum: {
				type: [Number, String],
				default: 0
			},
			bgColor: {
				type: String,
				default: `bg-light border-bottom border-light-secondary`
			},
			// 是否隐藏右边
			showRight: {
				type: Boolean,
				default: true
			},
			showNavbar: {
				type: Boolean,
				default: true,
			}
		},
		components: {
			freeIconButton,
			freePopup
		},
		data() {
			return {
				menus: [{
						name: '发起群聊',
						event: 'navigateTo',
						path: '/pages/mail/mail/mail?type=createGroup',
						icon: '\ue957'
					},
					{
						name: '添加好友',
						event: 'navigateTo',
						path: '/pages/common/search/search?searchType=user',
						icon: '\ue622'
					},
					{
						name: '扫一扫',
						event: 'scan',
						icon: '\ue97f'
					},
					{
						name: '收付款',
						event: '',
						icon: '\ue647'
					},
					{
						name: '帮助与反馈',
						event: '',
						icon: '\ue6c0'
					},

				],
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
		computed: {
			fixedStyle() {
				return `height:${this.navBarHeight}px`
			},
			getTitle() {
				let noreadnum = this.noreadnum > 0 ? ' (' + this.noreadnum + ')' : ''
				return this.title + noreadnum
			},
			getCalss() {
				let fiexd = this.fixed ? 'fixed-top' : ''
				return `${fiexd} ${this.bgColor}`
			}
		},
		methods: {
			openExtend() {
				this.$refs.extend.show(uni.upx2px(430), this.navBarHeight)
			},
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			search() {
				uni.navigateTo({
					url: '/pages/common/search/search',
					animationType: 'fade-in',
					animationDuration: 200
				})
			},
			clickEvent(item) {
				this.$refs.extend.hide()
				switch (item.event) {
					case 'navigateTo':
						uni.navigateTo({
							url: item.path
						})
						break;
					case 'scan':
						uni.scanCode({
							success: (res) => {
								if (res.scanType === 'QR_CODE') {
									let result = JSON.parse(res.result)
									switch (result.type) {
										case 'group':
											uni.showLoading();
											$H.post('/group/checkrelation', {
												id: parseInt(result.id)
											}).then(res2 => {
												if (!res2.status) {
													uni.navigateTo({
														url: '/pages/chat/scan-add/scan-add?params=' +
															encodeURIComponent(JSON.stringify(
																res2.group)),
													});
												} else {
													uni.navigateTo({
														url: '/pages/chat/chat/chat?params=' +
															encodeURIComponent(JSON.stringify({
																id: res2.group.id,
																name: res2.group.name,
																avatar: res2.group
																	.avatar,
																chat_type: 'group',
															})),
													});
													this.chat.readChatItem(res2.group.id, res2.group
														.chat_type)
												}
												uni.hideLoading()
											}).catch(err => {
												uni.hideLoading()
											})

											break
										case 'user':
											uni.navigateTo({
												url: '/pages/mail/user-base/user-base?user_id='+result.id,
											})
											break
									}
								}
							}
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	
</style>
