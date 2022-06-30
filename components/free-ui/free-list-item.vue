<template>
	<view :style="boxStyle" class="bg-white flex align-stretch"  hover-stay-time='50'  hover-start-time='0' :hover-class="bghover" @click="$emit('click')">
		<view v-if="showLeftIcon" class="flex align-center justify-center py-2 px-3">
			<slot name="icon"></slot>
			<image :src="cover" class="rounded" v-if="cover" mode="aspectFill" :style="coverStyle"></image>

		</view>
		<view :class='textClassP'
			class="flex-1 border-bottom border-light-secondary flex  align-center justify-between">
			<slot>
				<view class="flex">
					<view class="flex justify-between align-start flex-column">
						<text style="font-size: 32rpx;">{{title}}</text>
						<view v-if="Subtitle">
							<text style="max-width: 600rpx; text-overflow: ellipsis;" class="text-ellipsis font-sm pt-1 text-muted">{{Subtitle}}</text>
						</view>
					</view>
					<slot name="titleRight"></slot>
				</view>

			</slot>
			<view class="flex align-center" v-if="showRight">
				<slot name="right"></slot>
				<!-- 右图标 -->
				<text v-if="showRightIcon" class="iconfont pl-1 pr-3 text-light-muted font-md">&#xe617;</text>
			</view>
		</view>
	</view>
</template>

<script>
	import freeBadge from "@/components/free-ui/free-badge.vue"
	export default {
		components: {
			freeBadge
		},
		props: {
			// 封面
			cover: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			// 右图标
			showRight: {
				type: Boolean,
				default: false
			},
			// 封面大小
			coverSize: {
				type: [String, Number],
				default: 75
			},
			textClassP: {
				type: String,
				default: ''
			},
			// 显示左边图标
			showLeftIcon: {
				type: Boolean,
				default: true
			},
			// 显示右边图标
			showRightIcon: {
				type: Boolean,
				default: true
			},
			boxStyle: {
				type: String,
				default: ''
			},
			Subtitle: {
				type: [Boolean, String],
				default: false
			},
			bghover:{
				type:String,
				default:'bg-hover-light'
			}
		},
		computed: {
			coverStyle() {
				return `width: ${this.coverSize}rpx;height: ${this.coverSize}rpx;`
			}
		}

	}
</script>

<style>
</style>
