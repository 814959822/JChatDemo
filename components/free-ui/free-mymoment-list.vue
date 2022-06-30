<template>
	<!-- 朋友圈列表样式 -->
	<view class="px-2 flex align-start" :class="formatTimeMD(item.created_at,time)?'mt-5':'mt-1'">
		<!-- 时间 -->
		<view v-if="formatTimeMD(item.created_at,time)" style="width: 120rpx;min-height: 70rpx;"
			class="flex mr-3 flex-column">
			<view class="flex align-end justify-center" style="height: 70rpx;width: 120rpx;">
				<text class="font-max font-weight-bold">{{item.created_at|formatTimeD }} </text>
				<text style="padding-bottom: 4rpx;" class="font font-weight-bold">
					{{item.created_at|formatTimeM }}</text>
			</view>

		</view>
		<view style="width: 150rpx;" v-else>

		</view>

		<view  v-if="item.image.length||item.video" class="flex">
			<view class="mr-1" style="height: 140rpx;width: 140rpx;">
				<!-- 图片 -->
				<view v-if="item.image.length" class="flex flex-column-reverse flex-wrap"
					style="max-width: 140rpx;max-height: 140rpx;">

					<!-- 单图 -->
					<image :src='item.image[0]' @click='preview(image)' v-if="item.image.length===1" class="bg-chat"
						mode="aspectFill"></image>
					<!-- 多图 -->
					<image @click='preview(image)' v-for="(image,imageIndex) in item.image" :key='imageIndex' v-else
						:src="image" mode="aspectFill"
						:style="item.image.length===2?'height: 140rpx':'height: 70rpx'"
						style="width: 70rpx;"
						class="bg-chat flex flex-1 border border-white"></image>

				</view>
				<!-- 视频 -->
				<view v-if="item.video" class="py-2">
					<video :src="item.video.src" class="bg-chat ro" :poster="item.video.poster"
						style="height: 140rpx; width: 140rpx;" loop controls></video>
				</view>

			</view>
			<view @click="toinfo(item)" :class="item.content?'justify-between':'justify-end'" style="height: 140rpx;"
				class="flex flex-1  flex-column">
				<text v-if="item.content" style="text-overflow: ellipsis;lines: 3;"
					class="flex flex-1 font mb-1 ">{{item.content}}</text>

				<text v-if="item.image.length>1" style="text-overflow: ellipsis;lines: 3;"
					class="flex text-muted font-sm">共{{item.image.length}}张</text>

			</view>
		</view>

		<!--  -->
		<!-- 内容 -->
		<view @click="toinfo(item)" v-else class="flex px-1 flex-1 bg-chat rounded">
			<text v-if="item.content" style="text-overflow: ellipsis;lines: 3;"
				class="flex flex-1 font my-1">{{item.content}}</text>

		</view>



	</view>
</template>

<script>
	import $T from "@/common/free-lib/time.js"
	import freeAvater from "@/components/free-ui/free-avater.vue"
	export default {
		components: {
			freeAvater,
		},
		props: {
			item: Object,
			index: Number,
			time: Number
		},
		filters: {
			formatTimeM(value) {
				return $T.getMomentTime(value).M
			},
			formatTimeD(value) {
				return $T.getMomentTime(value).D
			},
			formatTimeY(value) {
				return $T.getMomentTime(value).Y
			},

		},
		methods: {
			formatTimeMD(value, upvalue) {
				return $T.getMomentTime(value).MD !== $T.getMomentTime(upvalue).MD
			},
			// 查看大图
			preview(src) {
				uni.previewImage({
					current: src,
					urls: this.item.image
				})
			},
			toinfo(item){
				uni.navigateTo({
					url:'/pages/find/momentInfo/momentInfo?item='+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style>
</style>
