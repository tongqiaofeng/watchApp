<template>
	<view class="mine-container">
		<view class="mine-top">
			<view :style="{ height: height + 'px' }"></view>
			<view class="mine-headPic" v-if="token == '' || token == null" @click="goLogin">
				<view class="mine-img-div">
					<image src="../static/imgs/mine/avatar.png" class="mine-img"></image>
				</view>
				<view class="mine-nick">
					<text>立即登录</text>
				</view>
			</view>
			<view class="mine-headPic" v-else @click="updateMyMsg">
				<view class="mine-img-div">
					<image v-if="headPic" :src="baseFileUrl + '/file/' + headPic" mode="aspectFill" class="mine-img">
					</image>
					<image v-else src="../static/imgs/mine/avatar.png" mode="aspectFill" class="mine-img">
					</image>
				</view>
				<view class="mine-nick">
					<text>{{ nick }}</text>
					<view style="margin-top: 16rpx; font-size: 24rpx">
						美好总会如期而至
					</view>
				</view>
			</view>

			<view v-if="inviteCode" class="share-invite">
				<view class="share-btn" @click="goIndex">
					推广中心
				</view>
			</view>
		</view>

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
				<navigator url="../watch/saleReport" hover-class="none" v-if="role == 'admin' || role == 'seller'">
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
				<view @click="goCollect">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/003.png" mode="aspectFill"></image>
							<text>商品收藏</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view @click="goFoot">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/004.png" mode="aspectFill"></image>
							<text>浏览记录</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>

			<view class="main-top main-center">
				<view @click="goService">
					<view class="top-one">
						<view class="one-font">
							<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;"
								src="../static/imgs/mine/005.png" mode="aspectFill"></image>
							<text>人工客服</text>
						</view>
						<view class="one-img">
							<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="top-one" @click="logout">
					<view class="one-font">
						<image style="width: 46rpx;height: 46rpx;margin-right: 26rpx;" src="../static/imgs/mine/006.png"
							mode="aspectFill"></image>
						<text>{{ token.length == 0 ? "注册/登录" : "退出登录" }}</text>
					</view>
					<view class="one-img">
						<image src="../static/imgs/mine/right.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="login-page">
				<uni-popup ref="popup" type="center">
					<view class="popup-container">
						<view class="popup-one">您还没有登录</view>
						<view class="popup-two">登录即刻开启品质生活</view>
						<view class="popup-login" @click="goToLogin">
							立即登录
						</view>
						<view class="popup-cancel" @click="closePopup">取消</view>
					</view>
				</uni-popup>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseFileUrl: this.$baseFileUrl,
				title: "我的页面",
				role: "",
				headPic: "",
				nick: "",
				token: "",
				userPermissions: {},
				height: null,
				inviteCode: "",

			};
		},
		onShow() {
			this.token = uni.getStorageSync("token");
			this.role = uni.getStorageSync("role");
			this.headPic = uni.getStorageSync("headPic");
			this.nick = uni.getStorageSync("nick");
			this.inviteCode = uni.getStorageSync("inviteCode");

			console.log(this.token);

			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			if (this.token == "" || this.token == null) {
				this.$nextTick(() => {
					this.$refs.popup.open();
				});
			} else {
				if (getApp().globalData.g_chat)
					getApp().globalData.g_chat.updateReddot();
			}
		},
		onLoad() {
			// 获取手机状态栏高度
			uni.getSystemInfo({
				success: (data) => {
					// 将其赋值给this
					this.height = data.statusBarHeight;
					console.log('height');
					console.log(this.height);
				},
			});
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		methods: {
			goIndex() {
				uni.navigateTo({
					url: "../my/share"
				})
			},
			// 修改信息
			updateMyMsg() {
				if (this.token == "" || this.token == null) {
					this.$refs.popup.open();
				} else {
					uni.navigateTo({
						url: "../my/updateMyMsg",
					});
				}
			},
			// 人工客服
			goService() {
				if (this.token == "" || this.token == null) {
					this.$refs.popup.open();
				} else {
					uni.navigateTo({
						url: "../common/service",
					});
				}
			},
			// 去登录
			goLogin() {
				this.$refs.popup.open();
			},
			// 退出登录
			logout() {
				if (this.token !== "" && this.token !== null) {
					uni.setStorageSync("userId", '');
					uni.setStorageSync("token", '');
					uni.setStorageSync("role", '');
					uni.setStorageSync("nick", '');
					uni.setStorageSync("headPic", '');
					uni.setStorageSync("phoneNumber", '');
					uni.setStorageSync("inviteCode", '');
					uni.setStorageSync("superiorInviteCode", '');
					this.token = "";
					this.role = "";

					this.createTempChat();

					uni.navigateTo({
						url: "../common/login",
					});
				} else {
					uni.navigateTo({
						url: "../common/login",
					});
				}
			},
			// 去登录页
			goToLogin() {
				this.$refs.popup.close();
				uni.navigateTo({
					url: "../common/login",
				});
			},
			// 关闭去登录
			closePopup() {
				this.$refs.popup.close();
			},

			// 销售报表
			goSaleReport() {
				if (this.token == "" || this.token == null) {
					this.$refs.popup.open();
				} else {
					uni.navigateTo({
						url: "../watch/saleReport",
					});
				}
			},
			// 商品收藏
			goCollect() {
				if (this.token == "" || this.token == null) {
					this.$refs.popup.open();
				} else {
					uni.navigateTo({
						url: "../my/collectGoods",
					});
				}
			},
			// 浏览记录
			goFoot() {
				if (this.token == "" || this.token == null) {
					this.$refs.popup.open();
				} else {
					uni.navigateTo({
						url: "../my/footprint",
					});
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	.mine-container {
		min-height: 100vh;
		background-color: #F4F8FB;

		.mine-top {
			height: 280rpx;
			padding-top: 112rpx;
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
