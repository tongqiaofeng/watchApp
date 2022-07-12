<template>
	<view class="detail" v-if="isShow">
		<view style="background-color: #fff;">
			<uni-swiper-dot :info="imgSrc" :current="current" mode="dot" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" style="height: 700rpx" @change="swiperChange">
					<swiper-item v-for="(item, index) in imgSrc" :key="index">
						<view class="swiper-item" @click="imagePreview(index)">
							<image :src="item" mode="aspectFill" style="width: 100%; height: 700rpx"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>

		<view class="detail-top">
			<view class="price">
				<view class="price-left" @click="checkPrice">
					<view class="left-hkd" :style="{'letter-spacing': detail.marketHkPrice == 0 ? '2rpx' : 0}">
						<text style="font-size: 28rpx;" v-if="detail.marketHkPrice">HKD</text>
						<text>{{getPrice(detail.marketHkPrice, '')}}</text>
					</view>
					<text style="margin: 0 20rpx;font-size: 28rpx;">/</text>
					<text class="left-usd"
						:style="{'letter-spacing': detail.marketUsPrice == 0 ? '2rpx' : 0}">{{getPrice(detail.marketUsPrice, 'USD')}}</text>
				</view>
				<view class="price-right" @click="checkStockNum" v-if="role == 'admin'">
					库存：{{detail.stockInNum}}
				</view>
			</view>

			<view class="name">
				{{detail.model}}
			</view>
			<view class="note">
				<view class="publicPrice">公价：{{getPrice(detail.publicPrice, 'HKD', '暂无')}}</view>
			</view>
		</view>


		<uni-segmented-control v-if="tabItems.length > 1" style="background-color: #ffffff" :current="tabCurrent"
			:values="tabItems" styleType="text" activeColor="#85dbd0" @clickItem="onClickTabItem">
		</uni-segmented-control>

		<!-- -------------------参数------------------- -->
		<view class="product-parameter" v-if="tabSelType == 0">
			<view v-if="tabItems.length == 1">
				<view class="parameter">参数</view>
			</view>
			<view class="parameter-main">
				<!--  style="border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;" -->
				<view class="parameter-every">
					<text class="title">品牌</text>
					<text class="container">{{ detail.brand }}</text>
				</view>
				<view v-if="detail.series" class="parameter-every">
					<text class="title">系列</text>
					<text class="container">{{ detail.series }}</text>
				</view>
				<view class="parameter-every" v-if="detail.model">
					<text class="title">型号</text>
					<text class="container">{{ detail.model }}</text>
				</view>
				<view v-if="detail.movementType" class="parameter-every">
					<text class="title">机芯类型</text>
					<text class="container">{{ detail.movementType }}</text>
				</view>
				<view v-if="detail.dialSize" class="parameter-every">
					<text class="title">表盘大小</text>
					<text class="container">{{ detail.dialSize }}</text>
				</view>
				<view v-if="detail.crownMaterial" class="parameter-every">
					<text class="title">表壳材质</text>
					<text class="container">{{ detail.crownMaterial }}</text>
				</view>
				<view v-if="detail.waterproof" class="parameter-every">
					<text class="title">防水深度</text>
					<text class="container">{{ detail.waterproof }}米</text>
				</view>
				<view v-if="detail.func" class="parameter-every">
					<text class="title">功能</text>
					<text class="container">{{ detail.func }}</text>
				</view>
				<view v-if="detail.startYear" class="parameter-every">
					<text class="title">上市时间</text>
					<text class="container">{{ detail.startYear }}</text>
				</view>
			</view>

		</view>

		<!-- -------------------价格------------------- -->
		<view class="product-parameter" v-if="tabSelType == 1">
			<view class="parameter-every" v-if="detail.createTime">
				<text class="title">入库时间</text>
				<text class="container">{{
          detail.createTime + " 【" + detail.stockLoc + "】"
        }}</text>
			</view>
			<view class="parameter-every" v-if="detail.cost">
				<text class="title">成本价</text>
				<view class="container">
					<text style="color: #73d1c6">{{
            "HKD " + formatNumberRgx(detail.cost)
          }}</text>
					<text v-if="role == 'admin'"
						style="color: #ff8b62; padding-left: 20rpx">{{ "CNY " + formatNumberRgx(detail.cnCost) }}</text>
				</view>
			</view>
			<view class="parameter-every" v-if="detail.pricePeer && detail.pricePeer != 0">
				<text class="title">同行价</text>
				<view class="container">
					<text style="color: #73d1c6">{{
            "HKD " + formatNumberRgx(detail.pricePeer)
          }}</text>
					<text v-if="role == 'admin'"
						style="color: #ff8b62; padding-left: 20rpx">{{ "CNY " + formatNumberRgx(detail.cnPricePeer) }}</text>
				</view>
			</view>
			<view class="parameter-every" v-if="detail.note">
				<view style="width: 80px" class="title">备注</view>
				<text class="container">{{ detail.note }}</text>
			</view>
		</view>

		<!-- -------------------销售------------------- -->
		<view class="product-parameter" v-if="tabSelType == 2">
			<view class="parameter-every" v-if="detail.soldTime">
				<text class="title">销售时间</text>
				<text class="container">{{ detail.soldTime }}</text>
			</view>
			<view class="parameter-every" v-if="detail.customer">
				<text class="title">客户名称</text>
				<text class="container">{{ detail.customer }}</text>
			</view>
			<view class="parameter-every" v-if="detail.saleTotalHkPrice">
				<text class="title">销售金额</text>
				<view class="container">
					<text style="color: #73d1c6">{{
            "HKD " + formatNumberRgx(detail.saleTotalHkPrice)
          }}</text>
					<text v-if="role == 'admin'"
						style="color: #ff8b62; padding-left: 20rpx">{{ "CNY " + formatNumberRgx(detail.saleTotalCnPrice) }}</text>
				</view>
			</view>
			<view class="parameter-every" v-if="detail.saleTotalHkPrice && detail.cost">
				<text class="title">利润</text>
				<view class="container">
					<text style="color: #73d1c6">{{
            "HKD " +
            formatNumberRgx(detail.saleTotalHkPrice - detail.cost)
          }}</text>
					<text v-if="role == 'admin'" style="color: #ff8b62; padding-left: 20rpx">{{
              "CNY " +
              formatNumberRgx(detail.saleTotalCnPrice - detail.cnCost)
            }}</text>
				</view>
			</view>
		</view>

		<view class="product-bottom">
			<view class="bottom-left">
				<view class="left-index" @click="goIndex">
					<image class="index-img" src="../static/imgs/details/index.png" mode="aspectFit"></image>
					<view class="index-font">首页</view>
				</view>
			</view>
			<view class="bottom-right">
				<view class="right-collect" @click="isCollectChange">
					<image class="index-img" :src="detail.isCollect ? collect2 : collect1" mode="aspectFit">
					</image>
					<view class="index-font">{{
            detail.isCollect == 0 ? "收藏" : "已收藏"
          }}</view>
				</view>
				<view class="right-service" @click="serviceClick">
					<image class="index-img" src="../static/imgs/details/service.png" mode="aspectFit"></image>
					<view class="index-font">联系客服</view>
				</view>
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
				currency: "",
				detail: {},
				imgSrc: [],
				dotsStyles: {
					width: 6,
					height: 6,
					backgroundColor: "#fff",
					border: "#fff",
					selectedBackgroundColor: "#b0edd5",
					selectedBorder: "#b0edd5",
				},
				current: 0,
				current2: 0,
				collect1: require("../static/imgs/details/collect.png"),
				collect2: require("../static/imgs/details/collect01.png"),

				tabItems: ["参数"],
				tabCurrent: 0,
				tabSelType: 0, //0:参数 1:价格 2:销售

				isShow: false,
				detailId: null,
				//设置默认的分享参数
				share: {
					title: "精品腕表，尽在TopTime",
					path: "/watch/detail?id=" + this.detailId,
					imageUrl: "",
					desc: "",
					content: "",
				},

			};
		},
		async onLoad(option) {
			await this.$onLaunched;
			
			this.role = uni.getStorageSync("role");
			this.token = uni.getStorageSync("token");
			this.currency = getApp().globalData.userInfo.currency;
			this.detailId = option.id; 
			this.getDetails(option.id);
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		onPullDownRefresh() {
			uni.showLoading({
				title: "正在刷新",
			});
			this.getDetails(this.detailId);
			uni.stopPullDownRefresh();
		},
		// 分享好友
		onShareAppMessage(res) {
			this.share.path = "/watch/detail?id=" + this.detailId;
			return {
				title: this.share.title,
				path: this.share.path,
				imageUrl: this.share.imageUrl,
				desc: this.share.desc,
				content: this.share.content,
				success: (res) => {
					uni.showToast({
						title: "分享成功",
						icon: "none",
					});
				},
				fail: (res) => {
					uni.showToast({
						title: "分享失败",
						icon: "none",
					});
				},
			};
		},
		// 分享朋友圈
		onShareTimeline(res) {
			this.share.path = "/watch/detail?id=" + this.detailId;
			return {
				title: this.share.title,
				path: this.share.path,
				imageUrl: this.share.imageUrl,
				desc: this.share.desc,
				content: this.share.content,
				success: (res) => {
					uni.showToast({
						title: "分享成功",
						icon: "none",
					});
				},
				fail: (res) => {
					uni.showToast({
						title: "分享失败",
						icon: "none",
					});
				},
			};
		},
		methods: {
			// 查看行情价历史
			checkPrice() {
				if (this.role == 'admin') {
					if (this.detail.marketPriceList.length == 0) {
						uni.showToast({
							icon: "none",
							title: "暂无价格历史记录"
						})
					} else {
						uni.navigateTo({
							url: "./priceHistory?marketPriceList=" + encodeURIComponent(JSON.stringify(this.detail
								.marketPriceList))
						})
					}
				}
			},
			// 查看每个库存点手表数量
			checkStockNum() {
				if (this.detail.stockMsgList.length == 0) {
					uni.showToast({
						icon: "none",
						title: "暂无库存"
					})
				} else {
					uni.navigateTo({
						url: "./stockNumber?stockMsgList=" + encodeURIComponent(JSON.stringify(this.detail
							.stockMsgList))
					})
				}
			},
			onClickTabItem(e) {
				if (this.tabCurrent != e.currentIndex) {
					this.tabCurrent = e.currentIndex;
					if (this.tabItems[this.tabCurrent] == "参数") this.tabSelType = 0;
					else if (this.tabItems[this.tabCurrent] == "价格") this.tabSelType = 1;
					else if (this.tabItems[this.tabCurrent] == "销售") this.tabSelType = 2;
					else this.tabSelType = 0;
				}
			},
			// 指示点
			swiperChange(e) {
				this.current = e.detail.current;
			},
			//预览轮播图
			imagePreview(index) {
				//uniapp预览轮播图
				uni.previewImage({
					current: index, //预览图片的下标
					urls: this.imgSrc, //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				});
			},
			// 获取商品详情
			getDetails(id) {
				console.log(id);
				uni.showLoading({
					title: "加载中......",
				});
				uni.request({
					url: this.$baseUrl + "/newWatch/api/watchInfo?id=" + id,
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					success: (res) => {
						uni.hideLoading();
						this.detail = res.data;

						uni.setNavigationBarTitle({
							title: this.detail.brand + ' - ' + this.detail.model,
						});

						this.imgSrc = [];
						if (
							this.detail.pics != "" &&
							this.detail.pics != null
						) {
							let p = this.detail.pics.split("|");
							for (let i = 0; i < p.length - 1; i++) {
								if (p[i].trim().length > 0) {
									this.imgSrc.push(this.$baseUrl + "/watch/api" + p[i].trim());
									if (!this.detail.pic2)
										this.detail.pic2 = this.$baseUrl + "/watch/api" + p[i].trim();
								}
							}
						}

						this.setTabItem();

						this.isShow = true;
					},
					fail: (err) => {
						uni.hideLoading();
						console.log(err);
					},
				});
			},
			setTabItem() {
				this.tabItems = ["参数"];
				if (
					this.detail.createTime ||
					this.detail.cost ||
					this.detail.pricePeer ||
					this.detail.note
				) {
					this.tabItems.push("价格");
				}
				if (
					this.detail.soldTime ||
					this.detail.saleTotalHkPrice ||
					this.detail.customer
				) {
					this.tabItems.push("销售");
				}
			},

			// 返回首页
			goIndex() {
				uni.switchTab({
					url: "../pages/index",
				});
			},
			// 收藏
			isCollectChange() {
				if (uni.getStorageSync("token").length == 0) {
					uni.showToast({
						title: "请登录",
						icon: "none",
						success: () => {
							uni.switchTab({
								url: "../pages/mine",
							});
						},
					});
				} else {
					console.log("添加与取消收藏");
					let list = [];
					list.push(this.detail.id);
					uni.request({
						method: "POST",
						url: this.$baseUrl + "/newWatch/api/favoriteSave",
						data: {
							watchIdList: list,
						},
						header: {
							token: uni.getStorageSync("token"),
						},
						complete: (res) => {
							console.log("添加与取消收藏");
							console.log(res);

							if (this.checkBack(res, true) == false) return;
							else {
								this.getDetails(this.detail.id);
							}
						},
					});
				}
			},
			// 联系客服
			serviceClick() {
				let detail = {};
				detail.type = "watch";
				detail.id = this.detail.id;
				detail.pic = this.detail.pic2;
				detail.title = this.detail.brand;
				detail.subTitle = this.detail.model;
				getApp().globalData.pageInItem = detail; 
				uni.navigateTo({
					url: "../common/service",
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.detail {
		width: 100%;
		padding-bottom: 150rpx;
		background-color: #F4F8FB;

		.uni-swiper__dots-nav {
			justify-content: flex-end;
		}

		.detail-top {
			margin: 20rpx 24rpx 0;
			padding: 20rpx 19rpx 38rpx;
			background-color: #fff;
			border-radius: 20rpx;

			.price {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 30rpx;
				color: #000;

				.price-left {
					height: fit-content;
					display: flex;
					align-items: center;

					.left-hkd {
						font-size: 48rpx;
						color: #1ECC99;
						font-weight: bold;
					}

					.left-usd {
						color: #4D555A;
						font-weight: bold;
						font-size: 28rpx;
					}
				}

				.price-right {
					font-size: 26rpx;
					color: #03314B;
					cursor: pointer;
				}
			}

			.name {
				padding: 16rpx 0;
				background-color: #fff;
				font-size: 32rpx;
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				color: #03314B;
			}

			.note {
				background-color: #fff;
				display: flex;
				justify-content: space-between;

				.publicPrice {
					color: #b6bac9;
					font-size: 20rpx;
				}
			}
		}

		.product-parameter {
			margin: 20rpx 24rpx 0;
			padding: 40rpx 20rpx;
			background-color: #fff;
			text-align: left;
			border-radius: 20rpx;

			.parameter {
				font-size: 32rpx;
				font-weight: bold;
				color: #03314B;
			}

			.parameter-line {
				height: 4rpx;
				margin-top: 30rpx;
				background-color: #f9f9f9;
				border-radius: 5px;
			}

			.parameter-main {
				margin-top: 39rpx;
				border: 2rpx solid #C7CFD3;
				border-top: none;

				.parameter-every {
					height: 70rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 24rpx;
					border-top: 2rpx solid #C7CFD3;
					background-color: #F4F8FB;
					box-sizing: border-box;

					.title {
						width: 180rpx;
						height: 100%;
						padding-left: 20rpx;
						line-height: 70rpx;
						color: #54626A;
						border-right: 2rpx solid #C7CFD3;
						box-sizing: border-box;
					}

					.container {
						height: 100%;
						padding-left: 22rpx;
						line-height: 70rpx;
						flex: 1;
						color: #03314B;
						background-color: #fff;
					}
				}
			}

		}

		.product-comment {
			margin-top: 20rpx;
			padding-bottom: 160rpx;
			background-color: #fff;
		}

		.step {
			padding: 30rpx 30rpx 10rpx 30rpx;
			background-color: #ffffff;

			.steptitle {
				font-size: 28rpx;
				margin-bottom: 20rpx;
			}

			.row {
				display: flex;
			}

			.item {
				margin-bottom: 60rpx;
				color: #666666;
				align-items: flex-start;

				.dot {
					width: 20rpx;
					height: 20rpx;
					background-color: #85dbd0;
					border-radius: 30rpx;
					margin-right: 20rpx;
					// margin-top: 10rpx;
				}

				.time {
					//color: #C0C0C0;
					font-size: 24rpx;
				}

				.desc {
					font-size: 24rpx;
					word-break: break-all;
					word-wrap: break-word;
				}
			}

			.line {
				margin: 10rpx 16rpx;
				border-left: 1rpx solid #e2ebfd;
				height: 56rpx;
				line-height: 56rpx;
				padding-left: 46rpx;
				font-size: 22rpx;

				.yesName {
					color: #b6bac9;
				}

				.noName {
					color: #b6bac9;
				}
			}
		}

		.product-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 20rpx 24rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			border-top: 1px solid #f9f9f9;

			.bottom-left {
				.left-index {
					margin-right: 40rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					cursor: pointer;
				}

				.index-img {
					width: 40rpx;
					height: 41rpx;
				}

				.index-font {
					margin-top: 8rpx;
					font-size: 20rpx;
					color: #757980;
				}
			}

			.bottom-right {
				display: flex;

				.right-collect,
				.right-service {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					color: #fff;
					border-radius: 60rpx;

					.index-img {
						width: 40rpx;
						height: 40rpx;
						margin-right: 6rpx;
					}
				}

				.right-collect {
					width: 236rpx;
					height: 80rpx;
					margin-right: 16rpx;
					background-color: #03314B;
				}

				.right-service {
					width: 343rpx;
					height: 80rpx;
					background-color: #1ECC99;
				}
			}
		}
	}
</style>
