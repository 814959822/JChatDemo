<template>
	<!-- 朋友圈列表样式 -->
	<view class="p-2 flex align-start border-bottom border-light-secondary">
		<!-- 头像 -->
		<free-avater  @click='openUser'  size='80' :src='item.avatar'></free-avater>
		<view class="pl-2 flex-1 flex flex-column">
			<!-- 昵称 -->
			<text class="font-md font-weight-bold mb-1 text-hover-primary">{{item.user_name}}</text>
			<!-- 内容 -->
			<text v-if="item.content" class="font text-dark mb-1">{{item.content}}</text>
			<!-- 图片 -->
			<view v-if="item.image.length" class="py-2 flex flex-wrap">
				<block v-for="(image,imageIndex) in item.image" :key='imageIndex'>
					<!-- 单图 -->
					<free-image @click='preview(image)' v-if="item.image.length===1"
						imageClass='bg-chat' :src='image'>
					</free-image>
					<!-- 多图 -->
					<image @click='preview(image)' v-else :src="image" mode="aspectFill"
						style="width: 180rpx;height: 180rpx;margin-right: 5rpx;margin-bottom: 5rpx;"
						class="bg-chat"></image>
				</block>
			</view>
			<!-- 视频 -->
			<view v-if="item.video" class="py-2">
				<video :src="item.video.src" class="bg-chat ro" :poster="item.video.poster" style="height: 300rpx; width: 500rpx;" loop
					controls></video>
			</view>
			<!-- 时间 -->
			<view class="flex align-center justify-between">
				<text class="font-sm text-light-muted">{{item.created_at|formatTime}}</text>
				<view @click="$emit('action',{item,index})" class="rounded px-1 bg-chat">
					<text class="font-lg text-hover-primary iconfont">&#xe611;</text>
				</view>
			</view>
			<!-- 点赞｜评论列表 -->
			<view  v-if="item.likes.length||item.comments.length" class="bg-chat rounded mt-2">
				<!-- 点赞 -->
				<view  v-if="item.likes.length" class="flex align-start px-2">
					<text class="flex-shrink align-center iconfont font-sm font-weight-bold py-1 text-hover-primary">&#xe62e;</text>
					<view class="flex flex-1  flex-wrap">
						<text v-for="(s,si) in item.likes" :key='si' class="font-sm py-1 font-weight-bold text-hover-primary ml-1">{{s.name}}</text>
					</view>
				</view>
				<!-- 评论 -->
				<view :class="(item.likes.length&&item.comments.length)?'border-top':''" v-if="item.comments.length" class="flex align-start px-2">
					<view class="flex flex-column flex-1">
						<view v-for="(c,ci) in item.comments" :key='ci' class=" py-1 flex">
							<text v-if="!c.reply" class="text-hover-primary font-weight-bold font-sm">{{c.user.name}}</text>
							<view v-if="c.reply" class="flex align-center">
								<text class="text-hover-primary font-weight-bold font-sm">{{c.user.name}}</text>
								<text class="text-muted font-sm">回复</text>
								<text class="text-hover-primary font-weight-bold font-sm">{{c.reply.name}}</text>
							</view>
							<text @click="$emit('reply',{index,reply:c.user,item})" class="font-sm  flex-1 text-dark">:{{c.content}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--  -->

	</view>
</template>

<script>
	import $T from "@/common/free-lib/time.js"
	import freeImage from "@/components/free-ui/free-image.vue"
	import freeAvater from "@/components/free-ui/free-avater.vue"
	export default {
		components: {
			freeAvater,
			freeImage
		},
		props: {
			item: Object,
			index: Number
		},
		filters: {
			formatTime(value) {
				return $T.gettime(value)
			}
		},
		methods: {
			// 查看大图
			preview(src) {
				uni.previewImage({
					current: src,
					urls: this.item.image
				})
			},
			openUser(item){
					uni.navigateTo({
						url:"/pages/mail/user-base/user-base?user_id="+this.item.user_id
					})
			},
		}
	}
</script>

<style>
</style>
