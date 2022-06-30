<template>
	<view class="flex align-center justify-center">
		<text :class="badgeClass" style="font-family:monospace;"
			class="freeBadge  font-sm  bg-danger text-white rounded-circle"
			:style="badgeStyle">{{value}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			badgeClass: {
				type: String,
				default: ''
			},
			badgeStyle: {
				type: String,
				default: ''
			},
			value: {
				type: [Number, String],
				default: ''
			}
		}
	}
</script>

<style scoped>
	.freeBadge {
		padding-top: 5rpx;
		padding-left: 12rpx;
		padding-bottom: 5rpx;
		padding-right: 12rpx;

	}
</style>
