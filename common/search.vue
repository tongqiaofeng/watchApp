<template>
	<view class="search-container">
		<view class="search-top" id="search-top">
			<view class="upAndDown">
				<view class="mine-top">
					<view :style="{ height: height + 'px' }"></view>
					<view class="mine-title">
						<view class="back" @click="goBack">&#xe8de;</view>
						<view class="search-input">
							<input
								type="text"
								style="width: 100%"
								v-model="keyword"
								placeholder="搜索"
								confirm-type="search"
								placeholder-style="color: #C0C5CE;font-size: 24rpx;"
								@confirm="searchInput"
							/>
							<uni-icons
								type="search"
								size="20"
								color="#7b7b7b"
								@click="searchInput"
							></uni-icons>
						</view>
					</view>
				</view>
				<view class="search-filter">
					<view class="filter-every" @click="filterSel05">
						<text
							class="every-font"
							:style="{ color: select == 5 ? '#03314B' : '#737C81' }"
							>综合</text
						>
					</view>
					<view class="filter-every" @click="filterSel01">
						<text
							class="every-font"
							:style="{ color: select == 0 ? '#03314B' : '#737C81' }"
							>销量</text
						>
					</view>
					<view class="filter-every" @click="filterSel02">
						<text
							class="every-font"
							:style="{ color: select == 2 ? '#03314B' : '#737C81' }"
							>浏览量</text
						>
					</view>
					<view class="filter-every" @click="filterSel03">
						<view class="every-main">
							<text
								class="every-font"
								:style="{ color: select == 1 ? '#03314B' : '#737C81' }"
								>价格</text
							>
							<view class="every-img">
								<image
									:src="
										select == 1 && isUp == 1
											? img1
											: select == 1 && isUp == 2
											? img2
											: img3
									"
									mode="aspectFit"
								></image>
							</view>
						</view>
					</view>
					<view class="filter-every" @click="filterSel04">
						<view class="every-main vCenter">
							<text
								class="every-font"
								:style="{
									color: select == 3 || select == 4 ? '#03314B' : '#737C81',
								}"
								>筛选</text
							>
							<view class="every-img">
								<image
									:src="select == 3 || select == 4 ? imgFilter1 : imgFilter2"
									mode="aspectFit"
								></image>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view
				v-if="select == 3"
				class="filter-container"
				:style="{ top: topHeight + 'px' }"
			>
				<view class="dialog-box">
					<scroll-view scroll-y class="dialog-scroll" style="max-height: 50vh">
						<view>
							<view class="title">类型:</view>
							<view class="btn-row">
								<view
									class="view-btn"
									:class="{ active: isAuction == 1 }"
									@click="chooseType('isAuction')"
									>精品</view
								>
								<view
									class="view-btn"
									:class="{ active: isNewStyle == 1 }"
									@click="chooseType('isNewStyle')"
									>新货</view
								>
								<view
									class="view-btn"
									:class="{ active: isTop == 1 }"
									@click="chooseType('isTop')"
									>热卖</view
								>
								<view
									class="view-btn"
									:class="{ active: isDiscount == 1 }"
									@click="chooseType('isDiscount')"
									>特价</view
								>
							</view>
						</view>
						<view>
							<view class="title">品牌:</view>
							<view class="btn-row">
								<view
									class="view-btn"
									:class="{ active: brand == item.brandName }"
									v-for="(item, index) in modelSeriesList"
									:key="index"
									@click="chooseBrand(item.brandName)"
									>{{ item.brandName }}</view
								>
							</view>
						</view>
						<view v-if="seriesList.length > 0">
							<view class="title">系列:</view>
							<view class="size-main">
								<view
									class="size-every"
									type="default"
									v-for="(item, index) in seriesList"
									:key="index"
									@click="seriesSelect(item.seriesName)"
									:class="{ active: series == item.seriesName }"
								>
									{{ item.seriesName }}
								</view>
							</view>
						</view>
					</scroll-view>
					<view class="post-btn" @click="postSearch">确认</view>
				</view>
				<view
					class="shade"
					style="width: 100%; min-height: 56vh"
					@click="filterSel04"
				></view>
			</view>
		</view>

		<view :style="{ 'margin-top': topConHeight + 'px' }">
			<view v-if="haveData == 0" class="no-data" style="padding-top: 300rpx">
				<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
				<text style="font-size: 28rpx">暂无商品哦~</text>
			</view>
			<view v-else>
				<view class="product-list">
					<view
						class="item"
						v-for="(item, index) in bagSearchList"
						:key="index"
						@click="checkDetails(item)"
					>
						<view v-if="item.pic" class="img">
							<easy-loadimage
								class="img"
								:image-src="item.pic"
								:scroll-top="scrollTop"
								border-radius="30rpx"
								mode="aspectFit"
							></easy-loadimage>
						</view>
						<image
              v-show="specialImgShow"
							class="specialImg"
							:src="getSpecialImg(item)"
							mode="aspectFit"
						></image>
						<view class="title">{{ getShowTitle(item) }}</view>
						<view class="title model" style="margin-top: 10rpx">{{
							item.model
						}}</view>
						<view v-if="item.marketHkPrice != 0" class="price">
							<text>
								HKD
								<text>{{
									' ' + formatNumberRgx(item.marketHkPrice)
								}}</text></text
							>
						</view>
						<view v-else class="price">价格请咨询客服</view>
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
			scrollTop: 0,
			jewelryImgUrl: this.$baseUrl + '/jewellery/api',
			haveData: 1,
			height: null,
			topHeight: null,
			topConHeight: 0,

			modelSeriesList: [],
			seriesList: [], //系列列表

			select: 5,
			isUp: 1,

			img1: require('../static/imgs/search/up.png'),
			img2: require('../static/imgs/search/down.png'),
			img3: require('../static/imgs/search/normal.png'),
			imgFilter1: require('../static/imgs/search/yes.png'),
			imgFilter2: require('../static/imgs/search/no.png'),

			bagSearchList: [],
			haveMore: 0,
			page: 1,
			keyword: '',
			sort: '',
			brand: '',
			series: '',

			flag: '', // index为首页
			typeArr: ['精品', '新货', '热卖', '特价'],
			isAuction: 0, // 是否精品 0否 1是
			isDiscount: 0, // 是否特价
			isNewStyle: 0, // 是否新货
			isTop: 0, // 是否热卖
		};
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#search-top')
			.boundingClientRect((data) => {
				this.topConHeight = data.height;
			})
			.exec();
	},
	onLoad(option) {
		// 获取手机状态栏高度
		uni.getSystemInfo({
			success: (data) => {
				// 将其赋值给this
				this.height = data.statusBarHeight;
			},
		});

		this.flag = option.flag || '';
		if (option.isAuction) {
			this.isAuction = Number(option.isAuction);
		}
		if (option.isDiscount) {
			this.isDiscount = Number(option.isDiscount);
		}
		if (option.isNewStyle) {
			this.isNewStyle = Number(option.isNewStyle);
		}
		if (option.isTop) {
			this.isTop = Number(option.isTop);
		}

		this.brand =
			option.brand === undefined
				? ''
				: JSON.parse(decodeURIComponent(option.brand));
		this.series =
			option.series === undefined
				? ''
				: JSON.parse(decodeURIComponent(option.series));
		this.keyword =
			option.keyword === undefined
				? ''
				: JSON.parse(decodeURIComponent(option.keyword));

		this.getList();

		this.getModelSeriesList();
	},
	computed: {
		specialImgShow() {
			if (this.isAuction || this.isDiscount || this.isNewStyle || this.isTop) {
				return false;
			}
			return true;
		},
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	onPullDownRefresh() {
		this.page = 1;
		this.bagSearchList = [];
		this.haveMore = 0;

		this.getList();
		uni.stopPullDownRefresh();
	},
	onReachBottom() {
		if (this.haveMore == 0) {
			this.page++;
			this.getList();
		}
	},
	onReady() {
		this.hidePageNavInWechatBrowser();
	},

	methods: {
		// 查看手表详情
		checkDetails(item) {
			uni.navigateTo({
				url: '../watch/detail?id=' + item.id,
			});
		},
		// 获取手表列表
		getList() {
			uni.showLoading({
				title: '加载中......',
			});
			uni.request({
				method: 'POST',
				url: this.$baseUrl + '/newWatch/api/watchSearch',
				data: {
					keyword: this.keyword,
					brand: this.brand,
					series: this.series,
					page: this.page,
					pageNum: 10,
					sort: this.sort,
					isAuction: this.isAuction,
					isDiscount: this.isDiscount,
					isNewStyle: this.isNewStyle,
					isTop: this.isTop,
				},
				header: {
					'content-type': 'application/json',
				},
				complete: (res) => {
					uni.hideLoading();

					if (res.data.data.length == 0) {
						this.haveMore = 1;
					} else {
						let list = res.data.data;
						for (let i = 0; i < list.length; ++i) {
							if (!list[i].pic) list[i].pic = '';
							if (list[i].pic.length == 0) {
								list[i].pic = '~@/static/imgs/common/nopic.jpg';
							} else {
								list[i].pic =
									this.$baseUrl +
									'/api/watch/stock' +
									list[i].pic.replace('\\', '/');
							}
						}

						setTimeout(() => {
							this.scrollTop++;
						}, 500);
						this.bagSearchList = this.bagSearchList.concat(list);
					}

					if (this.bagSearchList.length == 0) {
						this.haveData = 0;
						uni.showToast({
							icon: 'none',
							title: '暂无数据',
						});
					} else {
						this.haveData = 1;
					}
				},
			});
		},
		// 搜索框输入
		searchInput() {
			this.page = 1;
			this.bagSearchList = [];
			this.select = 5;
			this.isUp = 0;
			this.haveMore = 0;

			this.brand = '';
			this.series = '';
			this.sort = '';

			this.getList();

			for (let item of this.modelSeriesList) {
				if (item.brandName.indexOf(this.keyword) !== -1) {
					this.brand = item.brandName;
					this.seriesList = item.seriesList;
					return;
				}
			}
		},
		// 筛选
		filterSel04() {
			if (this.select == 3) {
				this.select = 4;
			} else {
				this.select = 3;

				this.$nextTick(() => {
					let view = uni.createSelectorQuery().select('.upAndDown');
					view
						.boundingClientRect((data) => {
							//获取固定尾部的高度=data.height
							this.topHeight = data.height;
						})
						.exec();
				});
			}
		},
		// 系列选择
		seriesSelect(series) {
			if (series == this.series) {
				this.series = '';
			} else {
				this.series = series;
			}
		},
		// 综合
		filterSel05() {
			this.page = 1;
			this.bagSearchList = [];
			this.select = 5;
			this.isUp = 0;
			this.haveMore = 0;
			this.sort = '';
			this.getList();
		},
		// 销量
		filterSel01() {
			this.page = 1;
			this.bagSearchList = [];
			this.select = 0;
			this.isUp = 0;
			this.haveMore = 0;
			this.sort = 1;
			this.getList();
		},
		// 浏览量
		filterSel02() {
			this.page = 1;
			this.bagSearchList = [];
			this.select = 2;
			this.isUp = 0;
			this.haveMore = 0;
			this.sort = 3;
			this.getList();
		},
		// 价格
		filterSel03() {
			this.page = 1;
			this.bagSearchList = [];
			this.select = 1;
			if (this.isUp == 1) {
				this.isUp = 2;
				this.sort = -2;
			} else if (this.isUp == 2) {
				this.isUp = 1;
				this.sort = 2;
			} else {
				this.isUp = 1;
				this.sort = 2;
			}
			this.haveMore = 0;
			this.getList();
		},
		// 获取手表品牌
		getModelSeriesList() {
			uni.request({
				url: this.$baseUrl + '/newWatch/api/watchSort',
				header: {
					'content-type': 'application/json',
				},
				complete: (res) => {
					console.log('手表品牌', res.data);
					this.modelSeriesList = res.data;
					if (this.brand) {
						this.getSeriesList();
					}
				},
			});
		},
		// 获取系列列表
		getSeriesList() {
			for (let item of this.modelSeriesList) {
				if (item.brandName == this.brand) {
					this.seriesList = item.seriesList;
				}
			}

			console.log('系列列表', this.seriesList);
		},

		// 返回上一层
		goBack() {
			uni.navigateBack({
				delta: 1,
			});
		},
		// 返回分类列表
		goToClassify() {
			uni.switchTab({
				url: '/pages/classify',
			});
		},
		getShowTitle(item) {
			if (item.series && item.series != '其他') {
				return item.brand + ' - ' + item.series;
			} else {
				return item.brand;
			}
		},
		getSpecialImg(item) {
			if (item.isTop == 1) {
				return '../static/imgs/index/new/top.png';
			} else if (item.isDiscount == 1) {
				return '../static/imgs/index/new/discout.png';
			} else if (item.isAuction == 1) {
				return '../static/imgs/index/new/auction.png';
			}
		},

		chooseBrand(name) {
			if (name == this.brand) {
				this.brand = '';
				this.series = '';
				this.seriesList = [];
			} else {
				this.brand = name;
				this.getSeriesList();
			}
		},
		chooseType(type) {
			if (type) {
				switch (type) {
					case 'isAuction':
						this.isDiscount = 0;
						this.isNewStyle = 0;
						this.isTop = 0;
						this.isAuction == 1 ? (this.isAuction = 0) : (this.isAuction = 1);
						break;
					case 'isNewStyle':
						this.isAuction = 0;
						this.isDiscount = 0;
						this.isNewStyle == 1
							? (this.isNewStyle = 0)
							: (this.isNewStyle = 1);
						this.isTop = 0;
						break;
					case 'isTop':
						this.isAuction = 0;
						this.isDiscount = 0;
						this.isNewStyle = 0;
						this.isTop == 1 ? (this.isTop = 0) : (this.isTop = 1);
						break;
					case 'isDiscount':
						this.isAuction = 0;
						this.isNewStyle = 0;
						this.isTop = 0;
						this.isDiscount == 1
							? (this.isDiscount = 0)
							: (this.isDiscount = 1);
						break;
				}
			}
		},
		postSearch() {
			this.select = 4;
			this.page = 1;
			this.bagSearchList = [];
			this.isUp = 0;
			this.sort = '';
			this.haveMore = 0;
			this.getList();
		},
	},
};
</script>

<style lang="scss" scoped>
.search-container {
	min-height: 100vh;
	background-color: #f4f8fb;
	position: relative;

	.search-top {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 9999;

		.back {
			font-family: 'iconFont';
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

				.line {
					width: 4rpx;
					height: 26rpx;
					margin: 0 10rpx;
					background-color: #c3c3c3;
				}

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
					border: 4rpx solid #03314b;
					height: 40rpx;

					input {
						font-size: 28rpx;
					}
				}
			}
		}

		.search-filter {
			padding: 36rpx 38rpx 30rpx;
			display: flex;
			justify-content: space-between;

			.filter-every {
				cursor: pointer;

				.every-main {
					display: flex;
					align-items: center;
				}

				.every-font {
					font-size: 28rpx;
					font-weight: bold;
				}

				.every-img {
					margin-left: 9rpx;

					image {
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
		}

		.filter-container {
			height: 100vh;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 100;
			background: rgba(0, 0, 0, 0.5);

			.dialog-box {
				width: 100%;
				min-height: 200rpx;
				background-color: #f9f9f9;
				padding-bottom: 20rpx;
				position: relative;
				.title {
					padding: 30rpx 24rpx;
					font-size: 28rpx;
					color: #333;
				}
				.btn-row {
					padding: 0 20rpx;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;
					border-bottom-left-radius: 10px;
					border-bottom-right-radius: 10px;

					.view-btn {
						width: 33.3%;
						height: 60rpx;
						padding: 0 10rpx;
						margin-bottom: 10rpx;
						line-height: 60rpx;
						background-color: #fff;
						color: #000;
						text-align: center;
						font-size: 26rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						border: 1px solid #f9f9f9;
						border-top: 0;
						border-bottom: 0;
						box-sizing: border-box;
						z-index: 9;
						&.active {
							background-color: #55b8b8;
							color: #fff;
						}
					}
				}
			}

			.post-btn {
				width: 690rpx;
				height: 88rpx;
				background: #55b8b8;
				border-radius: 128rpx;
				margin: 30rpx auto 0;
				color: #fff;
				font-size: 26rpx;
				text-align: center;
				line-height: 88rpx;
			}

			.goClassify {
				height: 90rpx;
				padding: 0 20rpx;
				line-height: 90rpx;
				font-size: 32rpx;
				text-align: center;
				background-color: #f9f9f9;
			}

			.size-main {
				padding: 0 20rpx;
				padding-bottom: 20rpx;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				background-color: #f9f9f9;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;

				.size-every {
					width: 33.33333%;
					height: 60rpx;
					padding: 0 10rpx;
					margin-bottom: 10rpx;
					line-height: 60rpx;
					background-color: #fff;
					color: #000;
					text-align: center;
					font-size: 26rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					border: 1px solid #f9f9f9;
					border-top: 0;
					border-bottom: 0;
					box-sizing: border-box;
					&.active {
						background-color: #55b8b8;
						color: #fff;
					}
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
			padding: 15rpx 15rpx 26rpx;
			border-radius: 20rpx;
			background-color: #fff;
			position: relative;

			.specialImg {
				position: absolute;
				top: 10rpx;
				right: 0;
				width: 100rpx;
				height: 113rpx;
			}

			.start-time {
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
				width: 300rpx;
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
				margin-top: 12rpx;
				font-size: 28rpx;
				color: #1ecc99;
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
