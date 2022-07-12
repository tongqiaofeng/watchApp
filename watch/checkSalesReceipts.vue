<template>
	<view class="check-sales-receipts-container">
		<uni-popup ref="downPopup" type="bottom">
			<view class="down-popup-container">
				<view class="title">
					选择下载格式
				</view>
				<view class="type" @click="downloadRece(1)">
					Excel下载
				</view>
				<view class="type" @click="downloadRece(2)">
					PDF下载
				</view>
			</view>
		</uni-popup>
		<view class="check-sales-receipts-main">
			<view class="main-container">
				<view class="check-sales-receipts-top">
					<view class="top-one">
						<text class="title">销售单号：</text>
						<view class="main">
							<text>{{salesReceiptsMsg.sellOrderNo}}</text>
							<view class="line"></view>
							<text class="copy" @click="copyBank(salesReceiptsMsg.sellOrderNo)">复制</text>
						</view>
					</view>
					<view class="top-one">
						<text class="title">客户名称：</text>
						<text class="main">{{salesReceiptsMsg.customer}}</text>
					</view>
					<view class="top-one">
						<text class="title">收货地址：</text>
						<text class="main">{{salesReceiptsMsg.address}}</text>
					</view>
					<view class="top-one">
						<text class="title">出售时间：</text>
						<text class="main">{{salesReceiptsMsg.sellTime}}</text>
					</view>
				</view>

				<view class="check-sales-receipts-product">
					<uni-table border emptyText="暂无数据">
						<uni-tr>
							<uni-th width="81" align="center">图片</uni-th>
							<uni-th width="150" align="center">型号</uni-th>
							<uni-th width="90" align="center">出售金额</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in salesReceiptsMsg.watchList" :key="index">
							<uni-td align="center">
								<image class="img" v-if="item.pic" :src="imgUrl + item.pic.replace('\\', '/')"
									mode="aspectFill">
								</image>
							</uni-td>
							<uni-td>
								<text
									style="color: #03314B;font-size: 24rpx;">{{ item.brand + ' - ' + item.series }}</text>
								<view style="color: #03314B;font-size: 24rpx;">
									{{ item.model }}
								</view>
							</uni-td>
							<uni-td align="center">
								<text
									style="color: #03314B;font-size: 24rpx;">{{getPrice(item.sellMoney, salesReceiptsMsg.sellCurrency)}}</text>
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>
				<view class="check-sales-receipts-pay">
					<view class="title">
						付款信息
					</view>
					<view class="pay-table">
						<uni-table border>
							<uni-tr>
								<uni-th width="90" align="center">付款日期</uni-th>
								<uni-th width="100" align="center">付款金额</uni-th>
								<uni-th width="100" align="center">外币金额</uni-th>
							</uni-tr>
							<uni-tr v-for="(pay, index2) in salesReceiptsMsg.paymentList" :key="index2">
								<uni-td align="center">
									<text style="color: #03314B;font-size: 24rpx;"> {{pay.payTime}}</text>
								</uni-td>
								<uni-td align="center">
									<text
										style="color: #03314B;font-size: 24rpx;">{{getPrice(pay.payMoney, salesReceiptsMsg.sellCurrency)}}</text>
								</uni-td>
								<uni-td align="center">
									<text
										style="color: #03314B;font-size: 24rpx;">{{getPrice(pay.foreignMoney, pay.foreignCurrency)}}</text>
								</uni-td>
							</uni-tr>
						</uni-table>
						<view class="zhang-img" v-if="salesReceiptsMsg.unPaidMoney == 0">
							<image style="width: 208rpx;height: 163rpx;" src="../static/imgs/common/zhang.png"
								mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="check-sales-receipts-not" v-if="salesReceiptsMsg.unPaidMoney != 0">
					<view class="not-every">
						<text class="title">已付：</text>
						<text
							class="content">{{getPrice(salesReceiptsMsg.paidMoney, salesReceiptsMsg.sellCurrency)}}</text>
					</view>
					<view class="not-pay">
						<text class="title">未付：</text>
						<text
							class="content">{{getPrice(salesReceiptsMsg.unPaidMoney, salesReceiptsMsg.sellCurrency)}}</text>
					</view>
				</view>
				<view class="check-sales-receipts-bank">
					<view class="title">
						收款账户
					</view>
					<uni-table border emptyText="暂无数据">
						<uni-tr>
							<uni-th width="60" align="center">币种</uni-th>
							<uni-th width="70" align="center">转账协议</uni-th>
							<uni-th width="130" align="center">地址</uni-th>
						</uni-tr>
						<uni-tr v-for="(item, index) in salesReceiptsMsg.bankAccountList" :key="index">
							<uni-td align="center">
								<text style="color: #03314B;font-size: 24rpx;">{{item.currency}}</text>
							</uni-td>
							<uni-td align="center">
								<text style="color: #03314B;font-size: 24rpx;">{{item.agreement}}</text>
							</uni-td>
							<uni-td align="center">
								<view class="bank-account">
									<text class="content">{{item.account}}</text>
									<view class="line"></view>
									<text class="copy" @click="copyBank(item.account)">复制</text>
								</view>
							</uni-td>
						</uni-tr>
					</uni-table>
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
				checkSellOrderNo: null,
				salesReceiptsMsg: {},

				//设置默认的分享参数
				share: {
					title: "销售单凭证",
					path: "",
					imageUrl: "",
					desc: "",
					content: "",
				},
				platform: null
			}
		},
		mounted() {
		
		},
		onLoad(option) {
			this.checkSellOrderNo = option.sellOrderNo;
			
			this.getSalesRecMsg();
		},
		onNavigationBarButtonTap(e) {
			this.downClick();
		},
		methods: {
			// 下载
			downClick() {
				this.$refs.downPopup.open();
			},
			// 确定
			downloadRece(type) {
				console.log(type);
				this.$refs.downPopup.close();
				uni.showLoading({
					title: "下载中..."
				})

				uni.request({
					url: this.$baseUrl + "/newWatch/api/salesCredentialsExport?type=" + type + "&sellOrderNo=" +
						this.salesReceiptsMsg.sellOrderNo,
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					// responseType: "arraybuffer",
					complete: (res) => {
						console.log("下载销售凭证");
						console.log(res);
						uni.hideLoading();

						if (res.statusCode === 200) {
							let url = this.$baseFileUrl + "/file/" + res.data;

							// #ifdef APP-PLUS
							this.platform = "APP";
							// #endif
							// #ifdef H5
							this.platform = "H5";
							// #endif

							if (this.platform === "H5") {
								//h5使用a标签下载
								let el = document.createElement("a");
								document.body.appendChild(el);
								el.href = url;
								el.target = "_blank";
								el.click();
								document.body.removeChild(el);
							} else if (this.platform == "APP") {
								//app使用原生plus下载
								let dtask = plus.downloader.createDownload(
									url, {
										filename: "_downloads/" + url, //利用保存路径，实现下载文件的重命名
									},
									(d, status) => {
										//d为下载的文件对象
										if (status == 200) {
											plus.runtime.openFile(d.filename); //选择软件打开文件
										} else {
											//下载失败
											plus.downloader.clear(); //清除下载任务
										}
									}
								);
								dtask.start();
							}
						} else {
							uni.showToast({
								title: "下载失败",
								duration: 2000
							});
						}
					},
				});
			},
			// 复制收款账户
			copyBank(item) {
				uni.setClipboardData({
					data: item,
					success: () => {
						//复制成功的回调函数
						uni.showToast({
							//提示
							title: "复制成功",
							icon: "none"
						});
					},
				});
			},
			// 获取销售凭证信息
			getSalesRecMsg() {
				uni.request({
					url: this.$baseUrl + "/newWatch/api/salesCredentials?sellOrderNo=" + this.checkSellOrderNo,
					header: {
						"content-type": "application/json"
					},
					complete: (res) => {
						console.log("销售凭证信息");
						console.log(res);

						this.salesReceiptsMsg = res.data;
					},
				});
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.check-sales-receipts-container {
		min-height: 100vh;
		padding-bottom: 40rpx;
		background-color: #F4F8FB;

		.down-popup-container {
			width: 100%;
			height: 40vh;
			background-color: #fff;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;

			.title {
				margin-bottom: 50rpx;
				padding: 40rpx;
				font-size: 30rpx;
				color: #03314B;
				font-weight: bold;
				text-align: center;
			}

			.type {
				margin-bottom: 50rpx;
				text-align: center;
				font-size: 28rpx;
				cursor: pointer;
			}
		}

		.check-sales-receipts-main {

			.main-container {
				padding: 36rpx 0 36rpx 36rpx;
				margin: 0 24rpx;
				background-color: #fff;
				border-radius: 30rpx;

				.check-sales-receipts-top {
					padding-right: 36rpx;

					.top-label {
						margin-bottom: 40rpx;
						font-size: 32rpx;
						color: #03314B;
						text-align: right;
					}

					.top-one {
						margin-bottom: 26rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 24rpx;

						.title {
							color: #03314B;
						}

						.main {
							display: flex;
							align-items: center;
							color: #757980;

							.line {
								width: 2rpx;
								height: 20rpx;
								margin: 0 15rpx;
								background-color: #757980;
							}

							.copy {
								color: #1ECC99;
								font-size: 28rpx;
							}
						}

					}
				}

				.check-sales-receipts-product {
					margin-top: 40rpx;
					padding-right: 24rpx;

					.img {
						width: 94rpx;
						height: 140rpx;
						border-radius: 20rpx;
					}
				}

				.check-sales-receipts-pay {
					padding-right: 24rpx;

					.pay-table {
						position: relative;
					}

					.zhang-img {
						position: absolute;
						top: 24rpx;
						left: 200rpx;
					}

					.title {
						margin: 50rpx 0 30rpx;
						text-align: left;
						font-size: 30rpx;
						color: #03314B;
						font-weight: bold;
					}
				}

				.check-sales-receipts-not {
					margin-top: 50rpx;
					padding-right: 24rpx;
					background-color: #fff;
					font-size: 24rpx;

					.not-every {
						margin-bottom: 28rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.title {
							color: #03314B;
						}

						.content {
							color: #757980;
						}
					}

					.not-pay {
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: #E13C3C;
					}
				}

				.check-sales-receipts-bank {
					padding-right: 24rpx;

					.title {
						margin: 50rpx 0 36rpx 0;
						text-align: left;
						font-size: 30rpx;
						font-weight: bold;
						color: #03314B;
					}

					.bank-account {
						display: flex;
						justify-content: center;
						align-items: center;

						.content {
							color: #03314B;
							font-size: 24rpx;
						}

						.line {
							width: 2rpx;
							height: 20rpx;
							margin: 0 15rpx;
							background-color: #757980;
						}

						.copy {
							color: #1ecc99;
							font-size: 28rpx;
						}
					}


				}
			}
		}
	}
</style>
<style>
	.uni-table-td {
		line-height: 30rpx;
	}
</style>
