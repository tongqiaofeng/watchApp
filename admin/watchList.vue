<template>
	<view>
		<view class="search row vCenter" :style="{ top: windowTop + 'px' }">
			<uni-search-bar style="flex: 1;" v-model="keyword" placeholder="输入关键字搜索" @confirm="filter()"
				cancelButton="none" />
			<image v-if="brandList.length > 0" style="width: 50rpx; height: 50rpx; padding: 0 20rpx 0 0;"
				src="../static/imgs/common/filter.png" mode="aspectFit" @click="showDrawer"></image>
				<image style="width: 50rpx; height: 50rpx; padding: 0 20rpx 0 0;"
					:src="listType == 1 ? '../static/imgs/common/list.png' : '../static/imgs/common/imglist.png'" mode="aspectFit" @click="changeListType"></image>
		</view>

		<uni-drawer ref="filter" mode="left" :width="windowWidth*3/4" :mask-click="true">
			<view class="filter">
				<scroll-view scroll-y class="scroll">
					<uni-collapse>
						<uni-collapse-item title="库存状态" thumb="../static/imgs/common/state.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="stateId" :localdata="stateList"></uni-data-checkbox>
						</uni-collapse-item>
						<uni-collapse-item v-if="brandList.length > 0" title="品牌"
							thumb="../static/imgs/common/brand.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="brandId" :localdata="brandList" :map="collapseMap">
							</uni-data-checkbox>
						</uni-collapse-item>
						<uni-collapse-item v-if="buyerList.length > 0" title="采购组"
							thumb="../static/imgs/common/buy.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="buyerId" :localdata="buyerList" :map="collapseMap">
							</uni-data-checkbox>
						</uni-collapse-item>
						<uni-collapse-item v-if="sellerList.length > 0" title="销售组"
							thumb="../static/imgs/common/sale.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="sellerId" :localdata="sellerList" :map="collapseMap">
							</uni-data-checkbox>
						</uni-collapse-item>
						<uni-collapse-item v-if="buyTimeList.length > 0" title="采购时间"
							thumb="../static/imgs/common/buy.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="buyTimeId" :localdata="buyTimeList" :map="collapseMap">
							</uni-data-checkbox>
						</uni-collapse-item>
						<uni-collapse-item v-if="sellTimeList.length > 0" title="销售时间"
							thumb="../static/imgs/common/sale.png">
							<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple
								icon="right" v-model="sellTimeId" :localdata="sellTimeList" :map="collapseMap">
							</uni-data-checkbox>
						</uni-collapse-item>
					</uni-collapse>
				</scroll-view>

				<view style="display: flex; justify-content: space-around;">
					<button class="btnReset" @click="ResetFilter" type="primary">重置</button>
					<button class="btnSet" @click="closeDrawer" type="primary">确认</button>
				</view>

			</view>


		</uni-drawer>

		<view v-if="showList.length == 0 && initOk == true" class="no-data" style="padding-top: 300rpx">
			<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
			<text style="font-size: 28rpx">暂无数据~</text>
		</view>
		<view v-else>
			<view v-if="listType == 0" class="list">
				<uni-table stripe emptyText="">
					<uni-tr style="">
						<uni-th v-for="(head, index) in tableHead" :key="index" style="font-size: 24rpx;" align="right"
							:sortable="head.sort" @sort-change="sortChange($event, index, head.k)" :width="head.width">{{head.name}}
						</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in showList" :key="index">
						<!-- <uni-td style="font-size: 22rpx;" align="right"> <text @click="itemClick()">{{item.brand}}</text> </uni-td> -->
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 0 ? 'bold' : ''}" align="right"> <text @click="goToDetail(item.id)">{{item.model}}</text> </uni-td>
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 1 ? 'bold' : ''}" align="right"> <text>{{getPrice(item.buyWatchPrice, '', '-', 0)}}</text> </uni-td>
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 2 ? 'bold' : ''}" align="right"> <text>{{getPrice(item.sellMoney, '', '-', 0)}}</text> </uni-td>
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 3 ? 'bold' : ''}" align="right"> <text>{{getPrice(item.profit, '', '-', 0)}}</text> </uni-td>
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 4 ? 'bold' : ''}" align="right"> <text>{{ item.profitRate == 0 ? '-' : item.profitRate.toFixed(2) + '%'}}</text> </uni-td>
						<!-- <uni-td style="font-size: 22rpx;" align="right"> <text @click="itemClick()">{{item.buyDeptName}}</text> </uni-td>
						<uni-td style="font-size: 22rpx;" align="right"> <text @click="itemClick()">{{item.sellDeptName}}</text> </uni-td> -->
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 4 ? 'bold' : ''}" align="right"> <text>{{item.buyDate}}</text> </uni-td>
						<uni-td :style="{'font-size': '22rpx', 'font-weight': sortCol == 4 ? 'bold' : ''}" align="right"> <text>{{item.stockSellTime}}</text> </uni-td>
					</uni-tr>
				</uni-table>
			</view>
			<view v-else class="list">
				<view v-for="(item, index) in showList" :key="index" class="item row vCenter" @click="goToDetail(item.id)">
					<view class="img">
						<easy-loadimage class="img" :image-src="item.pic" :scroll-top="scrollTop"  mode="aspectFit"></easy-loadimage>
					</view>
					<view class="desc">
						<view class="brand" @longpress="setCopyData(item.model)">{{item.model}}</view>
						<view class="line">
							<text>成本：</text> <text>{{getPrice(item.buyWatchPrice, '', '-', 0)}}</text>
						</view>
						<view class="line">
							<text>售价：</text> <text>{{getPrice(item.sellMoney, '', '-', 0)}}</text>
						</view>
						<view class="line">
							<text>利润：</text> <text>{{getPrice(item.profit, '', '-', 0)}}</text>
						</view>
						<view class="line">
							<text>利润率：</text> <text>{{item.profitRate == 0 ? '-' : item.profitRate.toFixed(2) + '%'}}</text>
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
				scrollTop: 0,
				windowWidth: 400,
				keyword: '',
				list: [],
				showList: [],
				initOk: false,
				sortCol: -1,
				listType:0,

				tableHead: [
				// 	{
				// 	width: 20,
				// 	name: '品牌'
				// }, 
				{
					width: 20,
					name: '型号',
					k:'model'
				}, {
					width: 20,
					name: '成本',
					k:'buyWatchPrice',
					sort: true
				}, {
					width: 20,
					name: '销售价',
					k:'sellMoney',
					sort: true
				}, {
					width: 20,
					name: '利润',
					k:'profit',
					sort: true
				}, {
					width: 20,
					name: '利润率',
					k:'profitRate',
					sort: true
				 }
				//  , {
				// 	width: 20,
				// 	name: '采购组',
				// 	sort: true
				// }, {
				// 	width: 20,
				// 	name: '销售组',
				// 	sort: true
				// }
				, {
					width: 20,
					name: '采购时间',
					sort: true
				}, {
					width: 20,
					name: '销售时间',
					sort: true
				}
				],

				collapseMap: {
					text: 'text',
					value: 'value'
				},

				stateId: [0, 1],
				stateList: [{
					value: 0,
					text: "未销售"
				}, {
					value: 1,
					text: "已销售"
				}],

				brandId: [],
				brandList: [],

				buyerId: [],
				buyerList: [],

				sellerId: [],
				sellerList: [],

				buyTimeId: [],
				buyTimeList: [],

				sellTimeId: [],
				sellTimeList: [],

			}
		},
		onLoad() {
			this.search();
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

			uni.getSystemInfo({
				success: (data) => {
					this.windowWidth = data.windowWidth;
				},
			});
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onPullDownRefresh() {
			this.search();
			uni.stopPullDownRefresh();
		},
		methods: {
			search() {
				uni.showLoading({
					title: '加载中......',
				});
				
				this.brandId = [];
				this.buyerId = [];
				this.sellerId = [];
				this.buyTimeId = [];
				this.sellTimeId = [];

				this.brandList = [];
				this.buyerList = [];
				this.sellerList = [];
				this.buyTimeList = [];
				this.sellTimeList = [];

				uni.request({
					url: this.$baseUrl + "/api/watch/stock/stockWatchList",
					method: "GET",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					complete: (res) => {
						uni.hideLoading();
						if (this.checkBack(res) == false) return;

						let list = res.data.data;

						for (let i = 0; i < list.length; ++i) {
							if (list[i].pic) {
								list[i].pic = this.$baseUrl + "/api/watch/stock" + list[i].pic.replace('\\',
									'/');
							} else {
								list[i].pic = '../static/imgs/common/nopic.jpg';
							}

							if (this.brandId.indexOf(list[i].brand) == -1)
								this.brandId.push(list[i].brand);

							if (this.buyerId.indexOf(list[i].buyDeptName) == -1)
								this.buyerId.push(list[i].buyDeptName);

							if (this.sellerId.indexOf(list[i].sellDeptName) == -1 && list[i].sellDeptName)
								this.sellerId.push(list[i].sellDeptName);

							list[i].buyDateEx = list[i].buyDate.substring(0, 4);
							if (this.buyTimeId.indexOf(list[i].buyDateEx) == -1) {
								this.buyTimeId.push(list[i].buyDateEx);
							}

							list[i].sellDateEx = '';
							if (list[i].stockSellTime) {
								list[i].sellDateEx = list[i].stockSellTime.substring(0, 4);
								if (this.sellTimeId.indexOf(list[i].sellDateEx) == -1) {
									this.sellTimeId.push(list[i].sellDateEx);
								}
							}

							if (list[i].sellDateEx){
								list[i].state = 1;
								list[i].profit = list[i].sellMoney - list[i].buyWatchPrice;
								list[i].profitRate = list[i].profit / list[i].buyWatchPrice*100;
							}
							else{
								list[i].state = 0;
								list[i].profit = 0;
								list[i].profitRate = 0;
							}

						}

						this.brandId.sort((a, b) => {
							return a.localeCompare(b);
						})
						for (let i = 0; i < this.brandId.length; ++i) {
							this.brandList.push({
								text: this.brandId[i],
								value: this.brandId[i]
							});
						}

						this.buyerId.sort((a, b) => {
							return b.localeCompare(a);
						})
						for (let i = 0; i < this.buyerId.length; ++i) {
							this.buyerList.push({
								text: this.buyerId[i],
								value: this.buyerId[i]
							});
						}

						this.sellerId.sort((a, b) => {
							return b.localeCompare(a);
						})
						for (let i = 0; i < this.sellerId.length; ++i) {
							this.sellerList.push({
								text: this.sellerId[i],
								value: this.sellerId[i]
							});
						}

						this.buyTimeId.sort((a, b) => {
							return b - a;
						})
						for (let i = 0; i < this.buyTimeId.length; ++i) {
							this.buyTimeList.push({
								text: this.buyTimeId[i],
								value: this.buyTimeId[i]
							});
						}

						this.sellTimeId.sort((a, b) => {
							return b - a;
						})
						for (let i = 0; i < this.sellTimeId.length; ++i) {
							this.sellTimeList.push({
								text: this.sellTimeId[i],
								value: this.sellTimeId[i]
							});
						}


						this.brandId = [];
						this.buyerId = [];
						this.sellerId = [];
						this.buyTimeId = [];
						this.sellTimeId = [];
						if(this.sellTimeList.length > 0){
							this.sellTimeId.push(this.sellTimeList[0].value);
						}

						this.list = list;
						this.filter();
						this.initOk = true;

						uni.hideLoading();
					},
				});
			},
			filter() {
				//this.scrollTop = 0;
				this.showList = [];
				for (let i = 0; i < this.list.length; ++i) {

					if (this.stateId.length > 0) {
						if (this.stateId.indexOf(this.list[i].state) == -1) {
							continue;
						}
					}

					if (this.brandId.length > 0) {
						if (this.brandId.indexOf(this.list[i].brand) == -1) {
							continue;
						}
					}

					if (this.buyerId.length > 0) {
						if (this.buyerId.indexOf(this.list[i].buyDeptName) == -1) {
							continue;
						}
					}

					if (this.sellerId.length > 0) {
						if (this.sellerId.indexOf(this.list[i].sellDeptName) == -1) {
							continue;
						}
					}

					if (this.buyTimeId.length > 0) {
						if (this.buyTimeId.indexOf(this.list[i].buyDateEx) == -1) {
							continue;
						}
					}

					if (this.sellTimeId.length > 0) {
						if (this.sellTimeId.indexOf(this.list[i].sellDateEx) == -1) {
							continue;
						}
					}
					
					let keyword = this.keyword.trim();
					if(keyword.length > 0){
						if(this.list[i].brand.indexOf(keyword) == -1 && this.list[i].model.indexOf(keyword) == -1){
							continue;
						}
					}

					this.showList.push(this.list[i]);

				}
			},
			showDrawer() {
				this.$refs.filter.open();
			},
			closeDrawer() {
				this.$refs.filter.close();
				this.filter();
			},
			ResetFilter() {
				this.stateId = [0, 1];
				this.brandId = [];
				this.buyerId = [];
				this.sellerId = [];
				this.buyTimeId = [];
				this.sellTimeId = [];

			},
			sortChange(e, index, k){
				this.sortCol = -1;
				if(e.order == 'ascending'){
					this.showList.sort((a, b)=>{
						if(index == 0)
							return a[k].localeCompare(b[k]);
						else
							return a[k]- b[k];
					})
					this.sortCol = index;
				}
				else if(e.order == 'descending'){
					this.showList.sort((a, b)=>{
						if(index == 0)
							return b[k].localeCompare(a[k]);
						else
							return b[k] - a[k];
					})
					this.sortCol = index;
				}
			},
			goToDetail(id) {
				uni.navigateTo({
					url: '../watch/detail?id=' + id,
				})
			},
			changeListType(){
				this.listType = 1 - this.listType;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-data-checklist::v-deep .checkobx__list {
		border-color: #1ECC99 !important;
	}

	.search {
		position: sticky;
		top: var(--window-top);
		z-index: 980;
		background-color: white;
	}

	.filter {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		background-color: white;

		.scroll {
			flex: 1;
			height: 0;
		}

		.btnReset {
			margin: 20rpx 40rpx 60rpx 40rpx;
			background-color: #cccccc;
			flex: 1;
		}

		.btnSet {
			margin: 20rpx 40rpx 60rpx 40rpx;
			background-color: #1ECC99;
			flex: 1;
		}
	}

	.list {
		font-size: 26rpx;
		color: #03314B;
		margin: 20rpx;

		.item {
			margin-bottom: 40rpx;
			padding-bottom: 40rpx;
			border-bottom: 1rpx dashed #cccccc;

			.img {
				width: 240rpx;
				height: 240rpx;
				margin-right: 20rpx;
			}

			.desc {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				width: 0;

				.brand {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 26rpx;

				}

				.line {
					display: flex;
					justify-content: space-between;
					margin-top: 10rpx;
				}
			}


		}
	}

	.nomore {
		text-align: center;
		font-size: 22rpx;
		color: #cccccc;
	}
</style>
