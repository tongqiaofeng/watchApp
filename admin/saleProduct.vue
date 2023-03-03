<template>
	<view class="sale-product-container">
		<!-- 出售商品 -->
		<view class="sale-product-msg">
			<uni-table border emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="100" align="center">型号</uni-th>
					<uni-th width="200" align="center">出售金额</uni-th>
					<uni-th width="150" align="center">成本(HKD)</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in productList" :key="index">
					<uni-td>
						<text>{{ item.brand }}</text>
						<view class="model">
							{{ item.model }}
						</view>
					</uni-td>
					<uni-td>
						<view style="display: flex">
							<uni-easyinput class="uni-input" type="number" placeholder="请输入" v-model="item.sellMoney" />
							<picker mode="selector" :range="priceCurrencys" range-key="text" @change="currencyChange">
								<view class="currency-sel" :style="{
                    color: saleWatchData.sellCurrency ? '#000' : '#999',
                  }">
									{{
                    saleWatchData.sellCurrency
                      ? saleWatchData.sellCurrency
                      : "选择币种"
                  }}
								</view>
							</picker>
						</view>
					</uni-td>
					<uni-td>
						<view style="display: flex">
							<uni-easyinput class="uni-input" type="number" placeholder="请输入" v-model="item.cost" />
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="sale-msg">
			<!-- <view class="title">
				销售信息
			</view> -->
			<uni-forms labelAlign="right" ref="saleWatchForm" :modelValue="saleWatchData" :rules="saleWatchRules">
				<uni-forms-item label="出售时间" name="sellTime">
					<uni-datetime-picker type="date" v-model="saleWatchData.sellTime" />
				</uni-forms-item>
				<uni-forms-item label="渠道" name="channelId">
					<picker mode="selector" :range="channelList" :value="channelIdx" range-key="name" @change="terraceChange">
						<view class="currency-sel" :style="{ color: channelIdx > -1 ? '#000' : '#999' }">
							{{ channelIdx > -1 ? channelList[channelIdx].name : "请选择" }}
						</view>
					</picker>
				</uni-forms-item>
				<uni-forms-item label="顾客账号" name="customerId">
					<picker mode="selector" :range="customerList" :value="customerIdx" range-key="username" @change="customerChange">
						<view class="currency-sel" :style="{ color: channelIdx > -1 ? '#000' : '#999' }">
							{{ customerIdx > -1 ? customerList[customerIdx].username : "请选择" }}
						</view>
					</picker>
				</uni-forms-item>
				<uni-forms-item label="顾客名称" name="customer">
					<uni-easyinput type="text" placeholder="请输入" v-model="saleWatchData.customer" />
				</uni-forms-item>
				<uni-forms-item label="收货地址" name="address">
					<uni-easyinput type="text" placeholder="请输入" v-model="saleWatchData.address" />
				</uni-forms-item>
				
				<view class="title"> 付款信息 </view>
				<view style="margin-bottom: 40rpx">
					<uni-table border>
						<uni-tr>
							<uni-th width="150" align="center">付款日期</uni-th>
							<uni-th width="200" align="center">付款金额</uni-th>
							<uni-th width="200" align="center">外币金额</uni-th>
							<uni-th width="150" align="center">付款备注</uni-th>
							<uni-th width="100" align="center">操作</uni-th>
						</uni-tr>
						<uni-tr v-for="(pay, index2) in saleWatchData.paymentList" :key="index2">
							<uni-td>
								<uni-datetime-picker type="date" v-model="pay.payTime" />
							</uni-td>
							<uni-td>
								<view style="display: flex">
									<uni-easyinput class="uni-input" type="number" placeholder="请输入金额"
										v-model="pay.payMoney" />
									<picker mode="selector" :range="priceCurrencys" range-key="text"
										@change="currencyChange">
										<view class="currency-sel" :style="{
                        color: saleWatchData.sellCurrency ? '#000' : '#999',
                      }">
											{{
                        saleWatchData.sellCurrency
                          ? saleWatchData.sellCurrency
                          : "选择币种"
                      }}
										</view>
									</picker>
								</view>
							</uni-td>
							<uni-td>
								<view style="display: flex">
									<uni-easyinput class="uni-input" type="number" placeholder="请输入金额"
										v-model="pay.foreignMoney" />
									<picker mode="selector" :range="priceCurrencys" range-key="text"
										@change="currencyChange2">
										<view class="currency-sel" @click="currencyClick(index2)"
											:style="{ color: pay.foreignCurrency ? '#000' : '#999' }">
											{{
                        pay.foreignCurrency ? pay.foreignCurrency : "外币币种"
                      }}
										</view>
									</picker>
								</view>
							</uni-td>
							<uni-td>
								<uni-easyinput type="textarea" v-model="pay.note" placeholder="请输入"></uni-easyinput>
							</uni-td>
							<uni-td align="center">
								<image v-if="index2 == 0" src="../static/imgs/chat/add.png" mode="aspectFill"
									style="width: 40rpx; height: 40rpx" @click="addPayMsg"></image>

								<uni-icons v-else type="trash-filled" size="26" @click="delPayMsg(index2)"></uni-icons>
							</uni-td>
						</uni-tr>
					</uni-table>
				</view>

				<uni-forms-item label="出售备注" name="note">
					<uni-easyinput type="textarea" v-model="saleWatchData.note" placeholder="请输入"></uni-easyinput>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="submit-btn" @click="addSale"> 提交 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: this.$baseUrl + "/api/watch/stock",
				productList: [],
				channelList: [],
				channelIdx:-1,
				customerList: [],
				customerIdx:-1,

				payIndex: null,
				saleWatchData: {
					channelId: "",
					customerId: "",
					address: "",
					customer: "",
					sellCurrency: "",
					sellTime: "",
					paymentList: [{
						payTime: "",
						payMoney: "",
						foreignMoney: "",
						foreignCurrency: "",
						note: "",
					}, ],
					note: "",
				},
				saleWatchRules: {
					customer: {
						rules: [{
							required: true,
							errorMessage: "请输入顾客名称",
							trigger: "blur",
						}, ],
					},
				},
				priceCurrencys: [{
						value: 7,
						text: "USDT",
					},{
						value: 1,
						text: "CNY",
					},
					{
						value: 2,
						text: "HKD",
					},
					{
						value: 3,
						text: "USD",
					},
					{
						value: 4,
						text: "EUR",
					},
					{
						value: 5,
						text: "GBP",
					},
					{
						value: 6,
						text: "AUD",
					}
				],
			};
		},
		onLoad(option) {
			this.productList = JSON.parse(decodeURIComponent(option.selList));

			this.getChannelList();
			this.getCustomerList();
		},
		methods: {
			// 生成销售单
			addSale() {
				console.log(this.productList);
				console.log(this.saleWatchData.paymentList);

				this.$refs.saleWatchForm
					.validate()
					.then((res) => {
						console.log("表单数据", res);
						uni.showLoading({
							title: "提交中......",
						});
						
						if(this.saleWatchData.paymentList.length > 0){
							if(!this.saleWatchData.paymentList[0].payTime && !this.saleWatchData.paymentList[0].payMoney){
								this.saleWatchData.paymentList = [];
							}
						}
						
						
						uni.request({
							method: "POST",
							url: this.$baseUrl + "/newWatch/api/sellOrderSave",
							header: {
								"content-type": "application/json",
								token: uni.getStorageSync("token"),
							},
							data: {
								address: this.saleWatchData.address,
								channelId: this.saleWatchData.channelId,
								customerId: this.saleWatchData.customerId,
								sellOrderDetailList: this.productList,
								customer: this.saleWatchData.customer,
								sellTime: this.saleWatchData.sellTime,
								sellCurrency: this.saleWatchData.sellCurrency,
								note: this.saleWatchData.note,
								paymentList: this.saleWatchData.paymentList,
							},
							complete: (res) => {
								console.log("新增销售单");
								console.log(res);

								uni.hideLoading();

								if (res.statusCode == 200) {
									uni.reLaunch({
										url: "./inventoryCheck",
									});
								} else {
									uni.showToast({
										icon: "none",
										title: res.data.status,
									});
								}
							},
						});
					})
					.catch((err) => {
						console.log("表单错误", err);
					});
			},
			// 增加付款信息
			addPayMsg() {
				this.saleWatchData.paymentList.push({
					payTime: "",
					payMoney: "",
					foreignMoney: "",
					foreignCurrency: "",
					note: "",
				});
			},
			// 删除付款信息
			delPayMsg(index) {
				this.saleWatchData.paymentList.splice(index, 1);
			},
			// 选择平台
			terraceChange(val) {
				if(val.detail.value){
					this.channelIdx = val.detail.value;
					this.saleWatchData.channelId = this.channelList[this.channelIdx].id;
				}
				
			},
			// 选择顾客
			customerChange(val) {
				if(val.detail.value){
					this.customerIdx = val.detail.value;
					this.saleWatchData.customerId = this.customerList[this.customerIdx].id;
				}
			},
			// 选择出售币种
			currencyChange(val) {
				console.log(val);
				this.saleWatchData.sellCurrency =
					this.priceCurrencys[val.detail.value].text;
			},
			currencyClick(index) {
				this.payIndex = index;
			},
			currencyChange2(val) {
				console.log(val);
				this.saleWatchData.paymentList[this.payIndex].foreignCurrency =
					this.priceCurrencys[val.detail.value].text;
			},
			// 获取平台列表
			getChannelList() {
				uni.request({
					url: this.$baseUrl + "/newWatch/api/channelList",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					complete: (ret) => {
						console.log("平台列表");
						console.log(ret);

						if (this.checkBack(ret, true) == false) return;
						if (ret.data.length > 0) this.channelList = ret.data;
					},
				});
			},
			// 获取顾客列表
			getCustomerList() {
				uni.request({
					url: this.$baseUrl + "/newWatch/api/customerList",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					complete: (ret) => {
					
						if (this.checkBack(ret, true) == false) return;
						if (ret.data.length > 0){
							this.customerList = ret.data;
							if(this.curCustomerId){
								for(let i = 0; i < this.customerList.length; ++i){
									if(this.curCustomerId == this.customerList[i].id){
										this.customerIdx = i;
										break;
									}
								}
							}
						}
						
						
					},
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.sale-product-container {
		padding: 20rpx 24rpx 40rpx;
		background-color: #f4f8fb;

		.sale-product-msg {
			padding: 20rpx;
			margin-bottom: 40rpx;
			background-color: #fff;
			border-radius: 20rpx;

			.model {
				width: 200rpx;
				overflow: hidden;
				word-break: keep-all;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 24rpx;
			}

			.msg-img {
				width: 120rpx;
				height: 220rpx;
			}

			.msg-data {
				margin-left: 40rpx;

				.brand {
					font-size: 30rpx;
					font-weight: bold;
				}

				.model {
					margin-top: 10rpx;
					font-size: 24rpx;
				}

				.price {
					margin-top: 40rpx;
					display: flex;
				}
			}
		}

		.sale-msg {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;

			.title {
				margin-bottom: 30rpx;
				color: #03314b;
				font-size: 28rpx;
				font-weight: bold;
			}
		}

		.submit-btn {
			margin: 100rpx 24rpx 0;
			padding: 30rpx 0;
			background-color: #03314b;
			color: #fff;
			font-size: 28rpx;
			border-radius: 20rpx;
			text-align: center;
			cursor: pointer;
		}

		.currency-sel {
			padding: 0 20rpx;
			line-height: 72rpx;
			font-size: 24rpx;
			font-weight: 200;
			border: 2rpx solid #f0f0f0;
			box-sizing: border-box;
			border-radius: 8rpx;
		}
	}
</style>
