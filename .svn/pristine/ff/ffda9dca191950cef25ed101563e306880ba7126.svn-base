<template>
	<view class="content">
		<view class="search-top" id="search-top">
			<view class="upAndDown">
				<view class="mine-top">
					<view :style="{ height: height + 'px' }"></view>
					<view class="mine-title">
						<view class="back" @click="goBack">&#xe8de;</view>
						<view class="search-input">
							<input type="text" style="width: 100%;" v-model="keyword" placeholder="搜索" confirm-type="search"
								placeholder-style="color: #C0C5CE;font-size: 24rpx;" @confirm="search"/>
							<uni-icons type="search" size="20" color="#7b7b7b" @click="search"></uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view :style="{ 'margin-top': topConHeight + 'px' }">
			<view v-if="list.length == 0 && curPage == 2" class="no-data" style="padding-top: 300rpx">
				<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
				<text style="font-size: 30rpx">暂无商品哦~</text>
			</view>
			<view v-else>
				<view class="product-list">
					<view class="item" v-for="(item, index) in list" :key="index">
						<view v-if="item.pic" class="img" @click="checkDetails(item)">
							<easy-loadimage class="img" :image-src="item.pic" :scroll-top="scrollTop"
								border-radius="30rpx" mode="aspectFill"></easy-loadimage>
						</view>
						<!-- <view class="start-time" v-if="item.startYear">
							{{item.startYear}}
						</view> -->
						<view class="title">{{ getShowTitle(item) }}</view>
						<view class="title" style="margin-top: 10rpx;">{{ item.model }}</view>
						<view v-if="item.marketHkPrice != 0" class="price">
							<text> HKD <text
									style="font-size: 36rpx;font-weight: bold;">{{ " " + formatNumberRgx(item.marketHkPrice) }}</text></text>
						</view>
						<view v-else class="price" style="font-size: 24rpx">价格请咨询客服</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="haveMore == false && list.length > 0" style="text-align: center;font-size: 24rpx;color: #bbbbbb;padding-bottom: 20rpx;">没有更多内容了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				height: null,
				topConHeight: 0,

				type:0,				//0：拍卖 1：最新 2：置顶 3：折扣
				keyword:'',
				curPage: 1,
				pageNum: 10,
				haveMore: true,
				list: [],

			};
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query
				.select("#search-top")
				.boundingClientRect((data) => {
					this.topConHeight = data.height;
					
					console.log('topConHeight', this.topConHeight, data)
				})
				.exec();
		},
		onLoad(option) {
			if(option.type)
				this.type = option.type;
				
			uni.getSystemInfo({
				success: (data) => {
					this.height = data.statusBarHeight;
					
				},
			});

			this.getList();

		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onPullDownRefresh() {
			this.search();
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			if (this.haveMore && this.list.length > 0) {
				this.getList();
			}
		},
		methods: {
			// 查看手表详情
			checkDetails(item) {
				uni.navigateTo({
					url: "../watch/detail?id=" + item.id
				})
			},
			search(){
				this.haveMore = true;
				this.curPage = 1;
				this.list = [];
				this.getList();
			},
			// 获取手表列表
			getList() {
				uni.showLoading({
					title: "加载中......",
				});
				uni.request({
					method: "POST",
					url: this.$baseUrl + "/newWatch/api/watchSearchWithType",
					data: {
						keyword: this.keyword,
						page: this.curPage,
						pageNum: this.pageNum,
						type: this.type,
					},
					header: {
						"content-type": "application/json",
					},
					complete: (res) => {
						console.log('手表搜索', res);
						uni.hideLoading();

						let list = res.data.data;
						let total = res.data.total;
						for (let i = 0; i < list.length; ++i) {
							if (list[i].pic.length == 0) {
								list[i].pic = '~@/static/imgs/common/nopic.jpg';
							} else {
								list[i].pic = this.$baseUrl + "/watch/api" + list[i].pic.replace('\\', '/');
							}
						}
						
						this.list = this.list.concat(list);

						this.curPage++;
						if (this.list.length >= total)
							this.haveMore = false;
							
						console.log(this.list.length, total, this.haveMore);
					},
				});
			},
			getSpecialImg(item){
				if(item.isTop == 1){
					return '../static/imgs/index/new/top.png';
				}
				else if(item.isDiscount == 1){
					return '../static/imgs/index/new/discout.png';
				}
				else if(item.isAuction == 1){
					return '../static/imgs/index/new/auction.png';
				}
			},
			// 返回上一层
			goBack() {
				uni.navigateBack({
					delta: 1,
				});
			},
			getShowTitle(item) {
				if (item.series && item.series != '其他') {
					return item.brand + ' - ' + item.series;
				} else {
					return item.brand;
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	
	.content {
		min-height: 100vh;
		background-color: #F4F8FB;
		position: relative;

		.search-top {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			background-color: #fff;
			z-index: 9999;
				
			padding-bottom: 20rpx;
			
			.back{
				font-family: "iconFont";
				font-size: 45rpx;
				font-weight: bold;
			}
			
			

			.mine-top {
				padding-top: 30rpx;
				

				.mine-title {
					height: 70rpx;
					padding: 0 40rpx 0 20rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.search-input {
						padding: 10rpx 20rpx;
						margin-left: 20rpx;
						flex: 1;
						display: flex;
						align-items: center;
						background-color: #fff;
						border-radius: 20rpx;
						text-align: center;
						font-size: 24rpx;
						border: 4rpx solid #03314B;
						height: 40rpx;
						
						input{ font-size: 28rpx; }
					}
				}
			}
		}


		.product-list {
			padding: 20rpx;
			display: grid;
			justify-content: space-between;
			grid-template-columns: repeat(auto-fill, 344rpx);
			grid-gap: 20rpx;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;

			.item {
				padding: 15rpx 15rpx 22rpx;
				border-radius: 30rpx;
				background-color: #fff;
				position: relative;


				.specialImg {
					position: absolute;
					top: 10rpx;
					right: 0;
					width: 100rpx;
					height: 113rpx;
				}
				
				.start-time{
					width: fit-content;
					padding: 0 8rpx;
					position: absolute;
					top: 20rpx;
					left: 20rpx;
					color: #fff;
					font-size: 20rpx;
					background-color: red;
				}

				.img {
					width: 200rpx;
					height: 300rpx;
					margin: 0 auto;
				}

				.title {
					margin-top: 28rpx;
					font-size: 28rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.note {
					margin-top: 18rpx;
					font-size: 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.price {
					margin-top: 22rpx;
					font-size: 22rpx;
					color: #1ECC99;
				}
			}
		}

		.search-main {
			margin-top: 230rpx;
			//padding: 0 20rpx;

			.main-container {
				display: grid;
				justify-content: space-between;
				grid-template-columns: repeat(auto-fill, 344rpx);
				grid-gap: 20rpx;
				background-color: #fff;
				border-top-left-radius: 30px;
				border-top-right-radius: 30px;
			}

			.main-every {
				width: 344rpx;
				text-align: center;

				.every-image {
					height: 344rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #fffcf7;
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;

					image {
						width: 100%;
						height: 100%;
						border-top-left-radius: 10px;
						border-top-right-radius: 10px;
					}
				}

				.every-main {
					min-height: 100rpx;
					padding: 22rpx 20rpx 17rpx;
					margin-bottom: 30rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text-align: left;
					border-bottom-left-radius: 10px;
					border-bottom-right-radius: 10px;
					border-top: 0;
					box-shadow: 0px -5px 0 0 #fffcf7, -10rpx 0px 20rpx 0 #f9f9f9,
						10rpx 0px 20rpx 0 #f9f9f9, 0px 20rpx 30rpx 0 #f9f9f9;

					.main-model {
						color: #000;
						font-size: 24rpx;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}

					.main-price {
						display: flex;
						justify-content: space-between;

						.price-money {
							margin-top: 10rpx;
							font-size: 26rpx;
							color: #ff8b62;
							font-weight: bold;
						}

						.price-qi {
							image {
								width: 42rpx;
								height: 27rpx;
							}

							.currency {
								margin-top: 5rpx;
								text-align: center;
								font-size: 24rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
