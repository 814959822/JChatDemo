<template>
	<image @tap="$emit('click')" @longpress="$emit('@longpress')"  @load="loadImage" :class="imageClass" :src="src" mode="aspectFill" :style="imageStyle" lazy-load>
	</image>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ""
			},
			imageClass: {
				type: String,
				default: ""
			},
			maxWidth: {
				type: Number,
				default: 300
			},
			maxHeight: {
				type: Number,
				default: 350
			}
		},
		data() {
			return {
				h: 100,
				w: 100
			}
		},
		computed: {
			imageStyle() {
				return `width:${this.w}px;height:${this.h}px;`
			}
		},
		methods: {
			// 加载图片
			loadImage(e) {
				let w = e.detail.width
				let h = e.detail.height
				// 最大宽度
				let maxW = uni.upx2px(this.maxWidth)
				let maxH = uni.upx2px(this.maxHeight)

				if ((h / w) <= 1 && w > maxW) {

					this.w = maxW
					this.h = ((h / w) <= 0.5) ? this.h = maxW / 2 : maxW * (h / w)
					this.$emit('load', {
						w: this.w,
						h: this.h
					})
					return
				} else if ((h / w) >= 1 && h > maxH) {
					this.h = maxH
					this.w = ((h / w) > 2) ? maxH / 2 : maxH * (w / h)
					this.$emit('load', {
						w: this.w,
						h: this.h
					})
					return
				} else {
					this.w = w
					this.h = h
					this.$emit('load', {
						w: this.w,
						h: this.h
					})
					return
				}


				// if (h <= maxH) {
				// 	// 
				// 	if (w <= maxW) {
				// 		this.w = w
				// 		this.h = h
				// 		return
				// 	}
				// 	// 
				// 	this.w = maxW
				// 	this.h = maxW * (h / w)
				// 	return
				// }
				// this.h = maxH
				// let w2 = maxH * (w / h)
				// this.w = w2 <= maxW ? w2 : maxW

			},
		}
	}
</script>

<style>
</style>
