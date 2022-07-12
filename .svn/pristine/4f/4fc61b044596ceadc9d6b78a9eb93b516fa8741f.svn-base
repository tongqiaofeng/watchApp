<template>
	<view class="admin-post-job-main">
		<view v-for="(item,index) in dataList" :key="index" class="commoditybox" @tap="tap(item)"
			@touchstart="touchstart(item,$event)" @touchmove="touchmove" @touchend="touchend()">
			<view class="option-box">
				<view v-for="oItem in options" :key="oItem.text" class="option-item" @tap.stop="optionClick(item,oItem)"
					:style="{ color: oItem.color || '#ffffff',
								  width: oItem.width?oItem.width+'rpx': '100rpx',
								  backgroundColor: oItem.bgColor || '#409EFF'}">{{ oItem.text }}</view>
			</view>
			<view class="item-container" :style="{ 
					transform: item.transformVal,transition: item.transitionVal }">
				<view class="box-left">
					<image v-if="item.pic" :src="watchUrl + item.pic.trim().replace('\\', '/')" mode="aspectFill">
					</image>
					<image v-else src="../../static/imgs/common/nopic.jpg" mode="aspectFill"></image>
				</view>
				<view class="box-right">
					<view class="name">{{ item.brand + " - " + item.series }}</view>
					<view class="name">
						{{item.model}}
					</view>
					<view class="price" v-if="item.marketHkPrice">
						<text class="currency">HKD</text>
						<text>{{formatNumberRgx(item.marketHkPrice)}}</text>
					</view>
					<view class="price" v-else>
						价格请咨询客服
					</view>
				</view>
				<view class="closeicon" v-if="item.sold == 1">
					<image src="../../static/imgs/common/sold.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => ([])
			},
			options: {
				type: Array,
				default: () => ([])
			},
			threshold: {
				type: [Number],
				default: 50
			}
		},
		data() {
			return {
				watchUrl: this.$baseUrl + "/watch/api",
				dataList: [],
				dragTargetX: 0,
				offsetWidth: 0,
				activeItem: null,
				translateX: 0,
			}
		},
		watch: {
			list: {
				immediate: true,
				deep: true,
				handler(list) {
					this.setList(list)
				}
			}
		},
		methods: {
			touchstart(item, e) {
				if (this.translateX != 0 && this.activeItem.item_id != item.item_id) {
					this.tap();
				}
				this.dragTargetX = e.touches[0].pageX;
				this.activeItem = item;
				if (!this.offsetWidth) {
					const res = uni.getSystemInfoSync();
					let screenWidth = res.screenWidth;
					this.offsetWidth = 0;
					this.options.forEach(item => {
						this.offsetWidth += screenWidth / 750 * item.width;
					})

				}
			},
			touchmove(e) {
				let newX = e.touches[0].pageX;
				let d = newX - this.dragTargetX;

				if ((this.translateX < -this.offsetWidth && d < 0) || (this.translateX > 0 && d > 0)) {
					if (this.translateX > 0) {
						d = d * 1 / this.translateX;
					} else {
						d = d * 1 / (Math.abs(this.translateX) - this.offsetWidth);
					}
				}

				this.translateX += d;
				this.setBounceTransition(true);

				this.dragTargetX = newX;
			},
			touchend() {
				if (this.translateX >= 0 || Math.abs(this.translateX) < this.threshold) {
					this.translateX = 0;
					this.setBounceTransition();
				} else {
					this.translateX = -this.offsetWidth;
					this.setBounceTransition();
				}
			},
			tap(item) {
				this.translateX = 0;
				this.setBounceTransition();
				this.$emit('click', item)
			},
			setBounceTransition(flag) {
				if (flag) {
					this.activeItem.transitionVal = 'none';
				} else {
					this.activeItem.transitionVal = 'all 0.4s cubic-bezier(.62,1.69,.7,1)';
				}
				this.activeItem.transformVal = 'translateX(' + this.translateX + 'px)';
			},
			setList(list) {
				this.dataList = [];
				this.dataList = list.map((item, index) => {
					return {
						...item,
						transformVal: '',
						transitionVal: '',
						item_id: index
					}
				})
			},
			optionClick(item, oitem) {
				this.translateX = 0;
				this.setBounceTransition();
				this.$emit("optionClick", item, oitem);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.admin-post-job-main {
		.commoditybox {
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			position: relative;

			.box-left {
				padding: 23rpx 0 24rpx 23rpx;
				margin-right: 30rpx;

				image {
					width: 140rpx;
					height: 210rpx;
				}
			}

			.box-right {
				padding: 61rpx 24rpx 61rpx 0;
				flex: 1;

				.name {
					width: 400rpx;
					font-size: 28rpx;
					color: #03314B;
					overflow: hidden;
					word-break: keep-all;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.price {
					margin-top: 30rpx;
					color: #1ECC99;
					font-size: 22rpx;
					font-weight: normal;

					.currency {
						margin-right: 3rpx;
						font-size: 36rpx;
						font-weight: bold;
					}
				}
			}

			.closeicon {
				position: absolute;
				right: 20rpx;
				bottom: 20rpx;
				color: #ef5b5b;
				font-size: 28rpx;

				image {
					width: 124rpx;
					height: 103rpx;
				}
			}

			.delIcon {
				position: absolute;
				top: 20rpx;
				right: -20rpx;
				color: #ef5b5b;
				font-size: 28rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}

	}

	.item-container {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		background-color: #ffffff;
	}

	.option-box {
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;

		.option-item {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 34rpx;
		}
	}
</style>
