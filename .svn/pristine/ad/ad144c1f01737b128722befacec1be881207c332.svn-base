<template>
	<view class="mine-container">
		<view class="mine-main">
			<view class="main-top">
				<navigator url="../watch/inventoryCheck" hover-class="none" v-if="role == 'admin' || role == 'seller'">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/001.png" mode="aspectFill"></image>
							<text>库存查询</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</navigator>
				<navigator url="../watch/saleReport" hover-class="none" v-if="role && role != 'indi'">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/002.png" mode="aspectFill"></image>
							<text>销售单管理</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</navigator>
			</view>
			
			<view class="main-top main-center">
				<navigator url="./purchaseReport" hover-class="none">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/002.png" mode="aspectFill"></image>
							<text>采购报表</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role: "",
				token: "",

			};
		},
		onShow() {
			
		},
		async onLoad() {
			await this.$onLaunched;
			this.token = uni.getStorageSync("token");
			this.role = uni.getStorageSync("role");
			
			if (this.token == "" || this.token == null) {
				uni.switchTab({ url:'../pages/mine' })
			}
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		methods: {
			
			
		},
	};
</script>

<style lang="scss" scoped>
	.mine-container {
		min-height: 100vh;
		background-color: #F4F8FB;

		.mine-top {
			display: flex;
			flex-direction: column;
			// background: linear-gradient(to bottom, #1FCC98, #F4F8FB);
			background: url(../static/imgs/mine/background.png) no-repeat;
			background-size: 100%;

			.mine-headPic {
				padding: 10rpx 40rpx 0rpx 40rpx;
				display: flex;
				align-items: center;

				.mine-img-div {
					width: 110rpx;
					height: 110rpx;
					margin-right: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid #f9f9f9;
					border-radius: 50%;

					.mine-img {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
					}
				}

				.mine-nick {
					// color: #ffffff;
					font-size: 34rpx;
					font-weight: bold;
					color: #03314B;
				}
			}

			.share-invite {
				margin: 60rpx 44rpx 0 0;
				display: flex;
				justify-content: flex-end;

				.share-btn {
					width: fit-content;
					padding: 18rpx 40rpx;
					font-size: 26rpx;
					text-align: center;
					background-color: #1ECC99;
					border-radius: 60rpx;
					color: #fff;
				}
			}
		}

		.mine-main {
			padding: 30rpx 24rpx;
			background-color: #F4F8FB;

			.main-top {
				padding: 0 30rpx;
				background-color: #fff;
				border-radius: 18rpx;

				.top-one {
					height: 129rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					cursor: pointer;

					.one-font {
						display: flex;
						align-items: center;
						font-size: 34rpx;
						color: #03314B;
						font-weight: bold;
					}

					.one-img {
						width: 13rpx;
						height: 24rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						image {
							width: 13rpx;
							height: 24rpx;
						}
					}
				}
			}

			.main-center {
				margin-top: 20px;
			}
		}

		.login-page {
			width: 100%;

			.popup-container {
				width: 660rpx;
				height: 507rpx;
				padding-bottom: 20rpx;
				margin: 0 auto;
				text-align: center;
				background: url(../static/imgs/mine/mineBack.png) no-repeat;
				background-size: 100% 100%;

				.popup-one {
					padding-top: 168rpx;
					font-size: 30rpx;
					color: #000;
					font-weight: bold;
				}

				.popup-two {
					margin-top: 30rpx;
					font-size: 26rpx;
					color: #c3c3c3;
				}

				.popup-login {
					width: 358rpx;
					height: 58rpx;
					margin: 0 auto;
					margin-top: 73rpx;
					line-height: 58rpx;
					cursor: pointer;
					background-color: #1ECC99;
					color: #fff;
					font-size: 24rpx;
					border-radius: 60rpx;
					text-align: center;
				}

				.popup-cancel {
					margin-top: 30rpx;
					font-size: 24rpx;
					cursor: pointer;
				}
			}
		}
	}
</style>
