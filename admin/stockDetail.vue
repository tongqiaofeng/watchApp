<template>
	<view class="detail" v-if="detail">
		<view style="background-color: #fff">
			<uni-swiper-dot :info="detail.stockInPic" :current="curImgIdx" mode="dot" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" style="height: 700rpx" @change="swiperChange">
					<swiper-item v-for="(item, index) in detail.stockInPic" :key="index">
						<view class="swiper-item" @click="imagePreview(detail.stockInPic, index)">
							<image :src="item" mode="aspectFill" style="width: 100%; height: 700rpx"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>


		<uni-segmented-control v-if="tabItems.length > 1" class="tab" :style="{ top: windowTop + 'px' }"
			:current="curTabIdx" :values="tabItems" styleType="text" activeColor="#1ECC99" @clickItem="onClickTabItem">
		</uni-segmented-control>

		<view class="desc" v-if="tabItems[curTabIdx] == '采购'">

			<view class="sep"></view>

			<view class="line" @longpress="setCopyData(detail.buyId)">
				<text>采购单号：</text> <text>{{detail.buyId}}</text>
			</view>
			<view class="line">
				<text>采购员：</text> <text>{{detail.buyUserName}}</text>
			</view>
			<view class="line"
				@longpress="setCopyData(getPrice(detail.buyWatchPrice, detail.buyWatchCurrency, '-', 0))">
				<text>采购金额：</text> <text>{{getPrice(detail.buyWatchPrice, detail.buyWatchCurrency, '-', 0)}}</text>
			</view>
			<view class="line">
				<text>采购日期：</text> <text>{{detail.buyDate}}</text>
			</view>
			<view class="line" @longpress="setCopyData(detail.buySourceName)">
				<text>采购地点：</text> <text>{{detail.buySourceName}}</text>
			</view>
			<view v-if="detail.buySourceAddr" class="line" @longpress="setCopyData(detail.buySourceAddr)">
				<text style="min-width: 200rpx;"></text> <text
					style="text-align: right;">{{detail.buySourceAddr}}</text>
			</view>

			<view class="sep"></view>

			<view class="line" @longpress="setCopyData(detail.buyWatchSn)">
				<text>机芯号：</text> <text>{{detail.buyWatchSn}}</text>
			</view>
			<view class="line" @longpress="setCopyData(detail.buyWatchCard)">
				<text>保卡日期：</text> <text>{{detail.buyWatchCard}}</text>
			</view>
			<view class="line">
				<text>额外表带（条）：</text> <text>{{detail.buyWatchBand}}</text>
			</view>
			<view class="line">
				<text style="min-width: 200rpx;">配件：</text> <text>{{detail.buyWatchParts}}</text>
			</view>

			<!-- 退税 -->
			<view v-if="detail.buyTaxState > -1">
				<view class="sep"></view>

				<view class="line">
					<text>退税方式：</text> <text>{{detail.buyTaxType == 0 ? '退到银行卡' : '现金'}}</text>
				</view>
				<view class="line">
					<text>退税公司：</text> <text>{{detail.buyTaxCompany}}</text>
				</view>
				<view class="line">
					<text>负责人：</text> <text>{{detail.buyTaxPerson}}</text>
				</view>
				<view class="line">
					<text>应退金额：</text> <text>{{getPrice(detail.buyTaxMoneyEx, detail.buyTaxCurrency, '-', 0)}}</text>
				</view>
				<view class="line">
					<text>是否返店退税：</text> <text>{{detail.buyTaxBackStore == 1 ? '是' : '否'}}</text>
				</view>

				<view v-if="detail.buyTaxPic.length > 0" class="line">
					<text style="min-width: 200rpx;">税单图片：</text>
				</view>

				<uni-swiper-dot v-if="detail.buyTaxPic.length > 0" :info="detail.buyTaxPic" :current="curImgIdx"
					mode="dot" :dotsStyles="dotsStyles">
					<swiper class="swiper-box" style="height: 700rpx" @change="swiperChange">
						<swiper-item v-for="(item, index) in detail.buyTaxPic" :key="index">
							<view class="swiper-item" @click="imagePreview(detail.buyTaxPic, index)">
								<image :src="item" mode="aspectFill" style="width: 100%; height: 700rpx"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>

				<view class="line">
					<text style="min-width: 200rpx;">退税记录：</text> <text
						v-if="detail.taxCashFlowList.length == 0">无记录</text>
				</view>
				<view v-if="detail.taxCashFlowList.length > 0" class="step" style="padding-bottom: 0rpx">
					<view v-for="(inout, index) in detail.taxCashFlowList" :key="index">
						<view class="item_s row">
							<view class="row" style="display: flex; align-items: center">
								<view class="dot_s"></view>
								<view class="time_s">{{ inout.time }}</view>
							</view>
							<view style="margin-left: 20rpx; flex: 1">
								<view class="desc_s">【{{ inout.personName }}】{{ getTradeType(inout.tradeType) }}
									{{getPrice(inout.settleMoney, inout.settleCurrency, '', 0)}}
									{{ inout.receiveType }} {{ getRateDesc(inout) }}
								</view>
								<text selectable="true" v-if="inout.remark" class="note_s">{{ inout.remark }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<!-- 佣金 -->
			<view v-if="detail.buyCommState > -1">
				<view class="sep"></view>
				<view class="line">
					<text>应收佣金：</text> <text>{{getPrice(detail.buyCommMoney, detail.buyWatchCurrency, '-', 0)}}</text>
				</view>
				<view class="line">
					<text style="min-width: 200rpx;">佣金账单：</text> <text
						v-if="detail.commCashFlowList.length == 0">无记录</text>
				</view>
				<view v-if="detail.commCashFlowList.length > 0" class="step" style="padding-bottom: 0rpx">
					<view v-for="(inout, index) in detail.commCashFlowList" :key="index">
						<view class="item_s row">
							<view class="row" style="display: flex; align-items: center">
								<view class="dot_s"></view>
								<view class="time_s">{{ inout.time }}</view>
							</view>
							<view style="margin-left: 20rpx; flex: 1">
								<view class="desc_s">【{{ inout.personName }}】{{ getTradeType(inout.tradeType) }}
									{{getPrice(inout.settleMoney, inout.settleCurrency, '', 0)}}
									{{ inout.receiveType }} {{ getRateDesc(inout) }}
								</view>
								<text selectable="true" v-if="inout.remark" class="note_s">{{ inout.remark }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>


			<!-- 小费 -->
			<view v-if="detail.feeCashFlowList.length > 0">
				<view class="sep"></view>
				<view class="line">
					<text style="min-width: 200rpx;">小费记录：</text>
				</view>
				<view class="step" style="padding-bottom: 0rpx">
					<view v-for="(inout, index) in detail.feeCashFlowList" :key="index">
						<view class="item_s row">
							<view class="row" style="display: flex; align-items: center">
								<view class="dot_s"></view>
								<view class="time_s">{{ inout.time }}</view>
							</view>
							<view style="margin-left: 20rpx; flex: 1">
								<view class="desc_s">【{{ inout.personName }}】{{ getTradeType(inout.tradeType) }}
									{{getPrice(inout.settleMoney, inout.settleCurrency, '', 0)}}
									{{ inout.receiveType }} {{ getRateDesc(inout) }}
								</view>
								<text selectable="true" v-if="inout.remark" class="note_s">{{ inout.remark }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>


		</view>

		<view class="desc" v-if="tabItems[curTabIdx] == '运输'">

			<view class="sep"></view>

			<view class="line" @longpress="setCopyData(detail.buyId)">
				<text>发货时间：</text> <text>{{detail.stockSendTime}}</text>
			</view>
			<view class="line">
				<text>预计到达时间：</text> <text>{{detail.stockArriveTime}}</text>
			</view>
			<view class="line">
				<text>运费：</text> <text>{{getPrice(detail.logMoneyEx, detail.logCurrency, '-', 0)}}</text>
			</view>

		</view>

		<view class="desc" v-if="tabItems[curTabIdx] == '库存'">

			<view class="sep"></view>
			<!-- <view class="line" @longpress="setCopyData(detail.stockNo)">
				<text></text> <text @click="printQrcode">打印二维码</text>
			</view> -->
			<view class="line" @longpress="setCopyData(detail.stockNo)">
				<text>货号：</text> <text>{{detail.stockNo}}</text>
			</view>
			<view class="line">
				<text>仓库：</text> <text>{{detail.warehouseName}}</text>
			</view>
			<view class="line">
				<text>入库时间：</text> <text>{{detail.stockArriveTime}}</text>
			</view>
			<view class="line">
				<text>入库员：</text> <text>{{detail.stockInUserName}}</text>
			</view>

			<view class="sep"></view>

			<view class="line" @longpress="setCopyData(detail.stockShelfNoA)">
				<text>货架号：</text> <text>{{detail.stockShelfNoA}}</text>
			</view>

			<view class="line" @longpress="setCopyData(detail.buyWatchSn)">
				<text>机芯号：</text> <text>{{detail.buyWatchSn}}</text>
			</view>
			<view class="line" @longpress="setCopyData(detail.buyWatchCard)">
				<text>保卡日期：</text> <text>{{detail.buyWatchCard}}</text>
			</view>
			<view class="line" @longpress="setCopyData(detail.stockInstateA)">
				<text>手表状态：</text> <text>{{detail.stockInstateA}}</text>
			</view>

			<view v-if="detail.state == 4">
				<view class="sep"></view>

				<view class="line">
					<text>提货人：</text> <text>{{detail.sellSendUserNick}}</text>
				</view>
				<view class="line">
					<text>出库时间：</text> <text>{{detail.stockOutTime}}</text>
				</view>

			</view>
		</view>

		<view class="desc" v-if="tabItems[curTabIdx] == '销售'">

			<view class="sep"></view>

			<view class="line" @longpress="setCopyData(detail.sellOrderId)">
				<text>销售单号：</text> <text>{{detail.sellOrderId}}</text>
			</view>
			<view class="line">
				<text>销售员：</text> <text>{{detail.sellUserName}}</text>
			</view>

			<view class="line">
				<text>销售金额：</text> <text>{{getPrice(detail.sellMoney, detail.sellCurrency, '', 0)}}</text>
			</view>

			<view class="line">
				<text>销售时间：</text> <text>{{detail.stockSellTime}}</text>
			</view>

			<view class="sep"></view>

			<view class="line">
				<text>提货人：</text> <text>{{detail.sellSendUserNick}}</text>
			</view>
			<view class="line">
				<text>出库时间：</text> <text>{{detail.stockOutTime}}</text>
			</view>
			<view class="line">
				<text>客户姓名：</text> <text>{{detail.sellCustomerName}}</text>
			</view>
			<view class="sep"></view>
			<view class="line">
				<text style="min-width: 200rpx;">备注：</text> <text>{{detail.sellNote}}</text>
			</view>

			<view class="sep"></view>

			<view v-if="detail.stockOutPic.length > 0" class="line">
				<text style="min-width: 200rpx;">出库图片：</text>
			</view>
			<uni-swiper-dot v-if="detail.stockOutPic.length > 0" :info="detail.stockOutPic" :current="curImgIdx"
				mode="dot" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" style="height: 700rpx" @change="swiperChange">
					<swiper-item v-for="(item, index) in detail.stockOutPic" :key="index">
						<view class="swiper-item" @click="imagePreview(detail.stockOutPic, index)">
							<image :src="item" mode="aspectFill" style="width: 100%; height: 700rpx"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>

		</view>


		<view class="desc" v-if="tabItems[curTabIdx] == '备注'">
			<view v-if="detail.note.length > 0" class="step" style="padding-bottom: 0rpx">
				<view v-for="(note, index) in detail.note" :key="index">
					<view class="item_s row">
						<view class="row" style="display: flex; align-items: center">
							<view class="dot_s"></view>
							<view class="time_s">{{ note.time }}</view>
						</view>
						<view style="margin-left: 20rpx; flex: 1">
							<text selectable="true" class="note_s">{{ note.note }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="desc" v-if="tabItems[curTabIdx] == '资金流'">
			<view v-if="detail.allCashFlowList.length > 0" class="step" style="padding-bottom: 0rpx">
				<view v-for="(inout, index) in detail.allCashFlowList" :key="index">
					<view class="item_s row">
						<view class="row" style="display: flex; align-items: center">
							<view class="dot_s"></view>
							<view class="time_s">{{ inout.time }}</view>
						</view>
						<view style="margin-left: 20rpx; flex: 1">
							<view class="desc_s">【{{ inout.personName }}】{{ getTradeType(inout.tradeType) }}
								{{getPrice(inout.settleMoney, inout.settleCurrency, '', 0)}}
								{{ inout.receiveType }} {{ getRateDesc(inout) }}
							</view>
							<text selectable="true" v-if="inout.remark" class="note_s">{{ inout.remark }}</text>
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
				windowTop: 44,
				id: 0,
				detail: null,

				curImgIdx: 0,
				dotsStyles: {
					width: 6,
					height: 6,
					backgroundColor: '#fff',
					border: '#fff',
					selectedBackgroundColor: '#1ECC99',
					selectedBorder: '#1ECC99',
				},



				tabItems: ['参数'],
				curTabIdx: 0,

			};
		},
		async onLoad(e) {
			await this.$onLaunched;
			this.id = e.id;
			this.getDetails();
		},
		onReady() {
			if (this.hidePageNavInWechatBrowser()) {
				this.windowTop = 0;
			} else {
				uni.getSystemInfo({
					success: (data) => {
						this.windowTop = data.windowTop;
					},
				});
			}
		},
		onPullDownRefresh() {
			uni.showLoading({
				title: '正在刷新',
			});
			this.getDetails();
			uni.stopPullDownRefresh();
		},
		methods: {
			// 长按复制品牌
			getCopyContent(info) {
				uni.setClipboardData({
					data: info, //要被复制的内容
					success: () => {
						//复制成功的回调函数
						uni.showToast({
							//提示
							title: '复制成功',
							icon: 'none',
						});
					},
				});
			},
			// 判断参数是否为其他，是 则不显示
			isOther(text) {
				if (text) {
					if (text == '其他' || text == '其它') {
						return false;
					} else {
						return true;
					}
				} else {
					return false;
				}
			},
			// 查看行情价历史
			checkPrice() {
				if (this.role == 'admin' || this.role == 'seller') {
					if (this.detail.marketPriceList.length == 0) {
						uni.showToast({
							icon: 'none',
							title: '暂无价格历史记录',
						});
					} else {
						uni.navigateTo({
							url: './priceHistory?marketPriceList=' +
								encodeURIComponent(JSON.stringify(this.detail.marketPriceList)),
						});
					}
				}
			},
			// 查看每个库存点手表数量
			checkStockNum() {
				if (this.detail.stockMsgList.length == 0) {
					uni.showToast({
						icon: 'none',
						title: '暂无库存',
					});
				} else {
					uni.navigateTo({
						url: './stockNumber?stockMsgList=' +
							encodeURIComponent(JSON.stringify(this.detail.stockMsgList)),
					});
				}
			},
			onClickTabItem(e) {
				if (this.curTabIdx != e.currentIndex) {
					this.curTabIdx = e.currentIndex;
				}
			},
			// 指示点
			swiperChange(e) {
				this.curImgIdx = e.detail.current;
			},
			//预览轮播图
			imagePreview(pic, idx) {
				//uniapp预览轮播图
				uni.previewImage({
					current: idx, //预览图片的下标
					urls: pic, //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				});
			},
			// 获取商品详情
			getDetails(id) {
				uni.showLoading({
					title: '加载中......',
				});
				uni.request({
					url: this.$baseUrl + '/api/watch/stock/stockInfo?id=' + this.id,
					header: {
						'content-type': 'application/json',
						token: uni.getStorageSync('token'),
					},
					success: (res) => {
						uni.hideLoading();
						this.detail = res.data.data;

						//入库图片
						let stockInPic = [];
						if (this.detail.stockInPic != '' && this.detail.stockInPic != null) {
							this.detail.stockInPic += '|';
							let p = this.detail.stockInPic.split('|');
							for (let i = 0; i < p.length - 1; i++) {
								if (p[i].trim().length > 0) {
									stockInPic.push(this.$baseFileUrl + '/file' + p[i].trim());
								}
							}
						}
						if (stockInPic.length == 0) {
							stockInPic.push('../static/imgs/common/nopic.jpg');
						}
						this.detail.stockInPic = stockInPic;

						//出库图片
						let stockOutPic = [];
						if (this.detail.stockOutPic != '' && this.detail.stockOutPic != null) {
							this.detail.stockOutPic += '|';
							let p = this.detail.stockOutPic.split('|');
							for (let i = 0; i < p.length - 1; i++) {
								if (p[i].trim().length > 0) {
									stockOutPic.push(this.$baseFileUrl + '/file' + p[i].trim());
								}
							}
						}
						this.detail.stockOutPic = stockOutPic;

						//税单图片
						let buyTaxPic = [];
						if (this.detail.buyTaxPic != '' && this.detail.buyTaxPic != null) {
							this.detail.buyTaxPic += '|';
							let p = this.detail.buyTaxPic.split('|');
							for (let i = 0; i < p.length - 1; i++) {
								if (p[i].trim().length > 0) {
									buyTaxPic.push(this.$baseFileUrl + '/file' + p[i].trim());
								}
							}
						}
						this.detail.buyTaxPic = buyTaxPic;

						//备注
						if (this.detail.note) {
							this.detail.note = JSON.parse(this.detail.note);
							this.detail.note.sort((a, b) => {
								return b.time.localeCompare(a.time);
							})
						} else {
							this.detail.note = [];
						}



						this.setTabItem();

					},
					fail: (err) => {
						uni.hideLoading();
						console.log(err);
					},
				});
			},
			setTabItem() {
				//stateList:[  { value: 0, text: "采购中" }, { value: 1, text: "运输中" }, { value: 2, text: "已入库" }, { value: 3, text: "已售未出库" }, { value: 4, text: "已售已出库" }, { value: 5, text: "已寄卖" }, { value: 6, text: "客人寄卖" }],

				this.tabItems = [];

				this.tabItems.push('采购');


				if (this.detail.state >= 1)
					this.tabItems.push('运输');

				if (this.detail.state >= 2)
					this.tabItems.push('库存');

				if (this.detail.state >= 3 && this.detail.state != 6)
					this.tabItems.push('销售');

				this.tabItems.push('备注');
				this.tabItems.push('资金流');

			},
			getTradeType(type) {
				if (type == 0) return "買入";
				else if (type == 1) return "賣出";
				else if (type == 2) return "轉賬";
				else if (type == 3) return "買入退款";
				else if (type == 4) return "賣出退款";
				else if (type == 5) return "其他收入";
				else if (type == 6) return "其他支出";
				else if (type == 7) return "税金";
				else if (type == 8) return "佣金";
				else if (type == 9) return "小费";
				else if (type == 10) return "运费";
				else return "-";
			},
			getRateDesc(item) {
				if (item.foreignMoney > 0) {
					return (
						"【" +
						this.getPrice(item.foreignMoney, item.foreignCurrency, '', 0) +
						" / " +
						item.foreignToSettleRate +
						"】"
					);
				} else {
					return "";
				}
			},

			// 返回首页
			goIndex() {
				uni.switchTab({
					url: '../pages/index',
				});
			},
			// 收藏
			isCollectChange() {
				if (uni.getStorageSync('token').length == 0) {
					uni.showToast({
						title: '请登录',
						icon: 'none',
						success: () => {
							uni.switchTab({
								url: '../pages/mine',
							});
						},
					});
				} else {
					console.log('添加与取消收藏');
					let list = [];
					list.push(this.detail.id);
					uni.request({
						method: 'POST',
						url: this.$baseUrl + '/newWatch/api/favoriteSave',
						data: {
							watchIdList: list,
						},
						header: {
							token: uni.getStorageSync('token'),
						},
						complete: (res) => {
							console.log('添加与取消收藏');
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
				detail.type = 'watch';
				detail.id = this.detail.id;
				detail.pic = this.detail.pic2;
				detail.title = this.detail.brand;
				detail.subTitle = this.detail.model;
				getApp().globalData.pageInItem = detail;
				uni.navigateTo({
					url: '../common/service',
				});
			},
			printQrcode() {

				uni.openBluetoothAdapter({
					success: (e) => {
						console.log('初始化蓝牙成功:' + e.errMsg);
						// 初始化完毕开始搜索
						this.startBluetoothDeviceDiscovery() 
					},

				})

				console.log(1111);
				uni.getBluetoothDevices({
					success(res) {
						console.log(res)
						if (res.devices[0]) {
				  	console.log(ab2hex(res.devices[0].advertisData))
						}
					}
				})
			}
		},
	};
</script>

<style lang="scss" scoped>
	.detail {


		.tab {
			position: sticky;
			top: var(--window-top);
			z-index: 980;
			background-color: white;
			padding-top: 10rpx;
		}

		.desc {

			font-size: 26rpx;
			color: #03314B;
			margin: 20rpx 40rpx;
			padding-bottom: 60rpx;

			.line {
				display: flex;
				justify-content: space-between;
				margin-top: 15rpx;
			}

			.sep {
				margin-top: 35rpx;
				margin-bottom: 30rpx;
				border: 1rpx dashed #ececec;
			}
		}


		.step {
			padding: 30rpx 0rpx 10rpx 0rpx;
			background-color: #ffffff;

			.steptitle {
				font-size: 28rpx;
				margin-bottom: 20rpx;
			}

			.row {
				display: flex;
			}

			.item_s {
				margin-bottom: 60rpx;
				color: #666666;
				align-items: flex-start;

				.dot_s {
					width: 20rpx;
					height: 20rpx;
					background-color: #1ECC99;
					border-radius: 30rpx;
					margin-right: 20rpx;
					// margin-top: 10rpx;
				}

				.time_s {
					//color: #C0C0C0;
					font-size: 24rpx;
				}

				.desc_s {
					font-size: 24rpx;
					word-break: break-all;
					word-wrap: break-word;
				}

				.note_s {
					color: #c0c0c0;
					font-size: 24rpx;
					word-break: break-all;
					word-wrap: break-word;
					margin-top: 10rpx;
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
					// width: 100%;
					height: fit-content;
					display: flex;
					align-items: center;
					position: relative;

					.left-hkd {
						font-size: 48rpx;
						color: #1ecc99;
						font-weight: bold;
						position: relative;

					}

					.left-usd {
						color: #4d555a;
						font-weight: bold;
						font-size: 28rpx;
					}
				}
			}

			.price-right {
				font-size: 26rpx;
				color: #03314b;
				cursor: pointer;
			}

			.info {
				margin-top: 8rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.flag {
					font-size: 24rpx;
					background-color: #edf7f4;
					padding: 6rpx 10rpx;
					border-radius: 4rpx;
					color: #23AD85;
				}

				.time {
					font-size: 24rpx;
					border: 0.5px solid #9BA0A9;
					padding: 4rpx 8rpx;
					margin-left: 20rpx;
					color: #9BA0A9;
					border-radius: 4rpx;
				}
			}


			.name {
				padding: 16rpx 0;
				background-color: #fff;
				font-size: 32rpx;
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				color: #03314b;
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
				color: #03314b;
			}

			.parameter-line {
				height: 4rpx;
				margin-top: 30rpx;
				background-color: #f9f9f9;
				border-radius: 5px;
			}

			.parameter-main {
				margin-top: 39rpx;
				border: 2rpx solid #c7cfd3;
				border-top: none;

				.parameter-every {
					height: 70rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 24rpx;
					border-top: 2rpx solid #c7cfd3;
					background-color: #f4f8fb;
					box-sizing: border-box;

					.title {
						width: 180rpx;
						height: 100%;
						padding-left: 20rpx;
						line-height: 70rpx;
						color: #54626a;
						border-right: 2rpx solid #c7cfd3;
						box-sizing: border-box;
					}

					.container {
						height: 100%;
						padding-left: 22rpx;
						line-height: 70rpx;
						flex: 1;
						color: #03314b;
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
					background-color: #03314b;
				}

				.right-service {
					width: 343rpx;
					height: 80rpx;
					background-color: #1ecc99;
				}
			}
		}
	}
</style>
