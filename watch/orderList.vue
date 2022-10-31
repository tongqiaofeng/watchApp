<template>
	<view class="content">
		<view v-if="saleList.length == 0" class="no-data" >
			<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
			<text style="font-size: 30rpx">暂无数据~</text>
		</view>
		<view v-else class="inventory-main">

			<view class="sale-list-container">
				<view class="list-every" v-for="(item, index) in saleList" :key="index" @click="checkSalesReceipts(item)">
					
					<view class="every-top" style="margin-top: 20rpx;">
						<view class="top-left">
							<text>订单号：{{item.sellOrderNo}}</text>
						</view>
						<view class="top-right" style="color: #000;">
							<text>{{item.sellTime}}</text>
						</view>
					</view>
					<view class="row" v-for="watch in item.watchList" :key="watch.stockId">
						<view class="img">
							<image class="img" v-if="watch.pic" :src="imgUrl + watch.pic.replace('\\', '/')"
								mode="aspectFill">
							</image>
						</view>
						<view style="flex: 1">
							<view class="every-name">
								<view class="bh">{{watch.brand + " - " + watch.series}}</view>
							</view>
							<view class="every-name" style="margin-top: 20rpx;">
								<view class="bh">{{ watch.model }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$baseUrl + "/watch/api",
				
				saleList: [],

			};
		},
		onLoad() {
			this.saleSearch();
		},
		onPullDownRefresh() {
			uni.showLoading({
				title: "正在刷新",
			});
			this.saleList = [];

			this.saleSearch();
			uni.stopPullDownRefresh();
		},
		methods: {
			// 查看销售单凭证PDF或者Excel，并分享给客户
			checkSalesReceipts(item) {
				uni.navigateTo({
					url: "./order?id=" + item.sellOrderNo,
				})
			},
			// 查询商品
			saleSearch() {
				uni.showLoading({
					title: "加载中...",
				});
				this.soldNum = 0;
				this.reserveNum = 0;
				let data = {};
				data = {
					page: this.page,
					pageNum: 10,
				};

				uni.request({
					url: this.$baseUrl + "/newWatch/api/customerSellOrderList",
					method: "POST",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					data: data,
					complete: (res) => {
						uni.hideLoading();
						if (this.checkBack(res) == false) return;


						this.saleList = res.data;

						if (this.saleList.length == 0) {
							uni.showToast({
								icon: "none",
								title: "暂无数据",
							});
						} 
					},
				});
			},		
		},
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: 100vh;
		padding: 30rpx 0;
		background-color: #f9f9f9;


		.inventory-main {
			padding: 0 24rpx;

			.inventory-num {
				margin-bottom: 20rpx;
				font-size: 22rpx;
				color: #aaa;
			}

			.sale-list-container {
				.list-every {
					margin-bottom: 30rpx;
					padding: 20rpx 24rpx 30rpx;
					border-radius: 30rpx;
					position: relative;
					background-color: #ffffff;

					.every-top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 26rpx;

						.top-left {}

						.top-right {
							font-size: 24rpx;
							color: #1ecc99;
						}
					}

					.row {
						margin-top: 30rpx;
						display: flex;
						align-items: center;
						color: #999999;
						font-size: 26rpx;

						.img {
							width: 166rpx;
							height: 168rpx;
							margin-right: 20rpx;
							border-radius: 20rpx;
						}

						.every-name {
							width: 100%;
							display: flex;
							justify-content: space-between;

							.bh {
								width: 350rpx;
								flex: 1;
								overflow: hidden;
								word-break: keep-all;
								white-space: nowrap;
								text-overflow: ellipsis;
								font-size: 28rpx;
								color: #03314B;
							}
						}

						.every-main {
							.cs {
								margin-top: 10rpx;
								font-size: 22rpx;
							}
						}
					}

					.line {
						width: 100%;
						height: 2rpx;
						margin: 30rpx 0;
						background-color: #f9f9f9;
					}

					.price {
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						font-size: 26rpx;

						.price-every {
							margin-top: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
