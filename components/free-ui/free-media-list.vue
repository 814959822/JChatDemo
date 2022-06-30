<template>
	<view :class="item.istop? 'bg-light':'bg-white'"  hover-stay-time='400'  hover-start-time='0' :hover-class="item.istop?'bg-hover-light':'bg-light'">
		<div @longpress='long' @click="onClick" class="flex align-stretch align-center">
			<!-- 头像 -->
			<view class="flex align-center justify-center  position-relative" style="width: 145rpx;">
				<free-avater :chatType='item.chat_type' :src="item.avatar" size="92"></free-avater>
				<text v-if="item.noreadnum&&item.chat_type==='group'" class="rounded-circle position-absolute bg-danger "
					style="top: 20rpx;right: 20rpx; width: 20rpx;height: 20rpx;"></text>
				<free-badge class='position-absolute' style='right:15rpx;top:15rpx;' v-if="item.noreadnum&&item.chat_type!=='group'"
					:value="item.noreadnum"></free-badge>
			</view>
			<!-- 内容 -->
			<view class="flex flex-column flex-1 py-3 pr-3 border-light-secondary">
				<view class="flex align-center justify-between mb-1">
					<text style="max-width: 430rpx;" class="text-ellipsis font-md">{{item.name}}</text>
					<text style="font-size: 23rpx;color: #b2b2b2;">{{item.update_time|formatTime}}</text>
				</view>
				<view class="flex align-center justify-between">
				<text style="font-size: 23rpx; width: 480rpx;text-overflow: ellipsis;" class="text-ellipsis  text-light-muted">{{(item.noreadnum&&item.chat_type==='group'?`[${item.noreadnum}条] `:'')+item.data}}</text>
				<text v-if="item.nowarn" class=" text-light-muted font-sm iconfont">&#xe629;</text>
				</view>
			</view>
		</div>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	import freeAvater from "@/components/free-ui/free-avater.vue"
	import freeBadge from "@/components/free-ui/free-badge.vue"
	import freeBase from "@/common/mixin/free-base.js"
	export default {
		mixins: [freeBase],
		props: {
			item: Object,
			index: Number,

		},
		components: {
			freeAvater,
			freeBadge
		},
		computed: {
			...mapState({
				chat: state => state.user.chat
			}),
		},
		methods: {
			onClick() {
				uni.navigateTo({
					url: '/pages/chat/chat/chat?params=' + encodeURIComponent(
						JSON.stringify({
							id: this.item.id,
							name: this.item.name,
							avatar: this.item.avatar,
							chat_type: this.item.chat_type
						}))
				})
				this.chat.readChatItem(this.item.id, this.item.chat_type)
			},
			long(e) {
				
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

<style>

</style>
