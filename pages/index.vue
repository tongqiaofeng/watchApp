<template>
	<view class="main">
		<view class="index-main-container">
			<view :style="{ height: height + 'px' }"></view>
			<view id="topWnd" class="index-top">
				<navigator class="search" url="../common/search" hover-class="none">
					<image
						class="search-icon"
						src="../static/imgs/index/new/search1_icon.png"
						mode="aspectFit"
					>
					</image>
					<view class="font">搜索商品</view>
				</navigator>

				<view class="content-wrapper">
					<!-- 轮播 -->
					<view class="swiper-box">
						<swiper
							class="swiper-list"
							style="height: 320rpx"
							:indicator-dots="false"
							indicator-active-color="#b0edd5"
							circular
							autoplay
							:duration="500"
						>
							<swiper-item
								style="text-align: center"
								v-for="(banner, index) in bannerList"
								:key="index"
							>
								<image
									class="every-img"
									:src="fileUrl + '/file/' + banner.imgUrl"
									mode="widthFix"
									@click="goJumpUrl(banner.jumpUrl)"
								>
								</image>
							</swiper-item>
						</swiper>
					</view>

					<!-- 品牌 -->
					<view class="brand-box">
						<view
							class="classify-every"
							v-for="(item, index) in allClassifyList"
							:key="index"
							@click="goBrandSearch(item)"
						>
							<image
								class="img"
								v-if="item.pic"
								:src="imgUrl + '/img' + item.pic"
								mode="aspectFill"
							>
							</image>
							<view class="text">{{ item.brand }}</view>
						</view>
						<view class="classify-every" @click="goClassify">
							<view class="circle">
								<view class="circle01"></view>
								<view class="circle02"></view>
								<view class="circle01"></view>
							</view>
							<view class="text">更多</view>
						</view>
					</view>

					<!-- 新闻 -->
					<view class="news-box">
						<view class="news-left">
							<image
								class="news-left-icon"
								mode="aspectFit"
								src="../static/imgs/index/news_icon.png"
							></image>
						</view>
						<swiper
							circular
							autoplay
							vertical
							:interval="3500"
							style="height: 80rpx; flex: 1"
							@click="goNewsList"
						>
							<swiper-item v-for="(item, index) in articles" :key="index">
								<view class="news-right">{{ item.title }}</view>
							</swiper-item>
						</swiper>
					</view>
					<view v-for="(ele, eleIndex) in indexData" :key="eleIndex">
						<!-- 轮播 -->
						<view
							class="swiper-box"
							v-if="eleIndex > 0 && renderType(ele) == 'swiper'"
						>
							<swiper
								class="swiper-list"
								:indicator-dots="false"
								indicator-active-color="#b0edd5"
								circular
								autoplay
								:duration="500"
							>
								<swiper-item
									style="text-align: center"
									v-for="(banner, index) in ele.dataStr"
									:key="index"
								>
									<image
										class="every-img"
										:src="fileUrl + '/file/' + banner.imgUrl"
										mode="widthFix"
										@click="goJumpUrl(banner.jumpUrl)"
									>
									</image>
								</swiper-item>
							</swiper>
						</view>

						<!-- 珍藏精品 -->
						<view class="discounts-box" v-if="renderType(ele) == 'isTop'">
							<image
								class="bg-img"
								v-if="ele.backgroundImg"
								:src="fileUrl + '/file/' + ele.backgroundImg"
								mode="widthFix"
							></image>
							<view class="discounts-top">
								<image
									class="title-img"
									v-if="ele.titleImg"
									:src="fileUrl + '/file/' + ele.titleImg"
									mode="widthFix"
								></image>
								<image
									v-if="ele.viewMore"
									class="more-img"
									src="../static/imgs/index/more-icon.png"
									mode="aspectFit"
									@click="goSearch(ele.viewMore)"
								></image>
							</view>
							<scroll-view class="discounts-scroll-box" scroll-x>
								<view
									class="scroll-item"
									v-for="(item, index) in ele.productList"
									:key="index"
								>
									<navigator
										:url="'../watch/detail?id=' + item.id"
										hover-class="none"
										class="item-info"
									>
										<view class="item-img">
											<easy-loadimage
												:image-src="fileUrl + imgSrc(item.pic)"
												:scroll-top="scrollTop"
												border-radius="20rpx"
												mode="aspectFit"
											></easy-loadimage>
										</view>
										<view class="item-name">{{
											item.brand + ' - ' + item.model
										}}</view>
									</navigator>
									<view
										class="info-bg"
										:style="{
											backgroundColor: index % 2 == 0 ? '#e9edf0' : '#F0ECE9',
										}"
									></view>
								</view>
							</scroll-view>
						</view>

						<!-- 商品 -->
						<view class="goods-box" v-if="renderType(ele) == 'product'">
							<view class="title-cover-img">
								<image
									class="title-img"
									v-if="ele.titleImg"
									:src="fileUrl + '/file/' + ele.titleImg"
									mode="heightFix"
								></image>
							</view>
							<view class="goods-list">
								<view
									v-if="ele.productList && ele.productList.length"
									v-for="item in ele.productList"
									:key="item.id"
									class="goods-item"
									@click="checkDetails(item)"
								>
									<view v-if="item.pic" class="img">
										<easy-loadimage
											class="img"
											:image-src="fileUrl + imgSrc(item.pic)"
											:scroll-top="scrollTop"
											mode="heightFix"
										></easy-loadimage>
									</view>
									<view class="info-card">
										<view class="title">{{ getShowTitle(item) }}</view>
										<view class="title" style="margin-top: 10rpx">{{
											item.model
										}}</view>
										<view v-if="item.marketHkPrice != 0" class="price">
											<text>
												HKD
												<text style="font-size: 36rpx">{{
													' ' + formatNumberRgx(item.marketHkPrice)
												}}</text>
											</text>
										</view>
										<view v-else class="price">价格请咨询客服</view>
									</view>
								</view>
							</view>

							<view
								class="more-btn"
								v-if="ele.viewMore"
								@click="goSearch(ele.viewMore)"
								>查看更多</view
							>
						</view>
					</view>
				</view>
			</view>

			<!-- 下载app -->
			<view>
				<view class="downloadApp" v-if="isMobile" @click="downloadApk">
					<image
						class="downloadApp-img"
						src="../static/imgs/common/logo.png"
						mode="aspectFill"
					></image>
					<view class="downloadApp-font"> 下载APP </view>
				</view>
				<view class="jump" v-if="isJump == 1" @click="cancelJump">
					<image src="../static/imgs/common/jump.png" mode="aspectFill"></image>
					<view class="jump-top">
						<text style="margin-right: 5px">点击右上方的</text>
						<view class="jump-circle"></view>
						<view class="jump-circle"></view>
						<view class="jump-circle"></view>
						<text style="margin-left: 5px">按钮</text>
					</view>
					<view class="jump-bottom"> 选择在浏览器中打开 </view>
				</view>
				<view class="downloadSel" v-if="isJump == 2">
					<view class="sel-bottom">
						<image
							src="../static/imgs/index/iphone.png"
							mode="aspectFill"
						></image>
						<image
							src="../static/imgs/index/android.png"
							mode="aspectFill"
						></image>
						<text @click="downloadClick">点击下载APP</text>
					</view>
					<view class="sel-close">
						<image
							src="../static/imgs/index/close.png"
							mode="aspectFill"
							@click="cancelJump"
						></image>
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
			isShow: true,
			imgUrl: this.$baseUrl + '/wechat/api',
			watchImgUrl: this.$baseUrl + '/api/watch/stock',
			watchsList: [],
			page: 1,

			//设置默认的分享参数
			share: {
				title: '精品腕表，尽在TopTime',
				path: '/pages/index',
				imageUrl: '',
				desc: '',
				content: '',
			},
			isMobile: false,
			isWechat: false,
			isJump: 0,

			isLoadMore: true,

			discountsProdoctList: [],
			allClassifyList: [],
			articles: [],
			height: 40,
			jumpList: [],

			fileUrl: this.$baseFileUrl,
			indexData: [], // 首页数据
			bannerList: [], // 轮播数据
		};
	},
	onShow() {
		if (window) {
			this.isMobile = true;
			let ua = window.navigator.userAgent.toLowerCase();
			if (
				ua.match(/MicroMessenger/i) == 'micromessenger' ||
				ua.match(/_SQ_/i) == '_sq_'
			) {
				this.isWechat = true;
			} else {
				this.isWechat = true;
			}
		} else {
			this.isMobile = false;
		}
		if (getApp().globalData.g_chat) getApp().globalData.g_chat.updateReddot();
	},
	onLoad(option) {
		uni.getSystemInfo({
			success: (data) => {
				this.height = data.statusBarHeight;
			},
		});
		if (option.code) uni.setStorageSync('superiorInviteCode', option.code);

		this.getInfo();

		this.getIndexOrSortDataGet();
	},
	onPullDownRefresh() {
		this.getInfo();
		this.getIndexOrSortDataGet();
		setTimeout(() => {
			uni.showToast({ title: '刷新成功', icon: 'none' });
			uni.stopPullDownRefresh();
		}, 500);
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	onReachBottom() {},
	onReady() {
		this.hidePageNavInWechatBrowser();
	},
	// 分享好友
	onShareAppMessage(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			imageUrl: this.share.imageUrl,
			desc: this.share.desc,
			content: this.share.content,
			success: (res) => {
				uni.showToast({
					title: '分享成功',
					icon: 'none',
				});
			},
			fail: (res) => {
				uni.showToast({
					title: '分享失败',
					icon: 'none',
				});
			},
		};
	},
	// 分享朋友圈
	onShareTimeline(res) {
		return {
			title: this.share.title,
			path: this.share.path,
			imageUrl: this.share.imageUrl,
			desc: this.share.desc,
			content: this.share.content,
			success: (res) => {
				uni.showToast({
					title: '分享成功',
					icon: 'none',
				});
			},
			fail: (res) => {
				uni.showToast({
					title: '分享失败',
					icon: 'none',
				});
			},
		};
	},

	computed: {
		/**
		 * 获取渲染类型
		 * swiper 轮播 viewType 1 relationType 2 dataStr存在
		 * brand 品牌
		 * news 新闻资讯
		 * retrieve 回收
		 * product 精品 新货 热卖 特价 viewType 1 relationType 0 dataStr存在
		 *
		 */
		renderType() {
			return (item = {}) => {
				if (
					item.viewType == 1 &&
					item.relationType == 2 &&
					item.dataStr != '[]'
				) {
					// 轮播图
					return 'swiper';
				} else if (
					item.viewType == 1 &&
					item.relationType == 0 &&
					item.productList &&
					item.productList.length &&
					!item.backgroundImg
				) {
					// 新货 热卖 特价
					return 'product';
				} else if (
					item.viewType == 1 &&
					item.relationType == 0 &&
					item.productList &&
					item.productList.length &&
					item.backgroundImg
				) {
					// 精品
					return 'isTop';
				}

				return '';
			};
		},
		imgSrc() {
			return (value) => {
				value = value.replace('\\', '/');
				return value;
			};
		},
	},
	methods: {
		// 首页数据
		getIndexOrSortDataGet() {
			uni.request({
				url: this.$baseUrl + '/newWatch/api/indexOrSortDataGet?manageType=0',
				method: 'GET',
				success: (res) => {
					if (res.data) {
						let data = res.data.map((item) => {
							if (item.dataStr != '[]') {
								item.dataStr = JSON.parse(item.dataStr);
							}
							return item;
						});
						if (data && data.length) {
							this.bannerList = data[0]['dataStr'];
							this.indexData = data;
						}
						setTimeout(() => {
							this.scrollTop++;
						}, 500);
					}
				},
			});
		},

		// 轮播图跳转
		bannerClick() {
			uni.navigateTo({
				url: '../common/search',
			});
		},
		// 二手
		goRecycle(item) {
			if (item.jumpType == 1) {
				uni.switchTab({
					url: item.url,
				});
			} else {
				uni.navigateTo({
					url: item.url,
				});
			}
		},
		// 新闻
		goNewsList() {
			uni.navigateTo({
				url: '../watch/newsList',
			});
		},

		// 点击下载
		downloadApk() {
			if (window) {
				let ua = window.navigator.userAgent.toLowerCase();
				if (
					ua.match(/MicroMessenger/i) == 'micromessenger' ||
					ua.match(/_SQ_/i) == '_sq_'
				) {
					this.isJump = 1;
				} else {
					this.isJump = 2;
				}
			}
		},
		// 下载app
		downloadClick() {
			this.isJump = 0;
			uni.showLoading({
				title: 'APP后台下载中...',
			});
			setInterval(() => {
				uni.hideLoading();
			}, 1500);

			let type = uni.getSystemInfoSync().platform;
			let req = {
				type: type,
				appType: 2,
			};
			uni.request({
				url: this.$baseUrl + '/wechat/api/versionGet',
				data: req,
				complete: (res) => {
					let list = res.data.url.split('/');
					let name = list[list.length - 1];
					if (this.browserIsIe()) {
						//假如是ie浏览器
						let elemIF = document.createElement('iframe');
						elemIF.src = res.data.url;
						elemIF.style.display = 'none';
						document.body.appendChild(elemIF);
					} else {
						const a = document.createElement('a');
						// a.setAttribute('target', '_blank');
						a.setAttribute('href', res.data.url);
						a.setAttribute('download', name);
						a.click();
					}
				},
			});
		},
		//判断是否为ie浏览器
		browserIsIe() {
			if (!!window.ActiveXObject || 'ActiveXObject' in window) return true;
			else return false;
		},
		// 取消在浏览器打开
		cancelJump() {
			this.isJump = 0;
		},

		// 查看该品牌下的手表
		goSearch(url) {
			if (url) {
				uni.navigateTo({ url: url });
			}
		},

		goBrandSearch(item) {
			uni.navigateTo({
				url:
					'../common/search?brand=' +
					encodeURIComponent(JSON.stringify(item.brand)),
			});
		},
		// 查看更多分类
		goClassify() {
			uni.switchTab({
				url: './classify',
			});
		},
		// 查看手表详情
		checkDetails(item) {
			uni.navigateTo({
				url: '../watch/detail?id=' + item.id,
			});
		},

		// 获取品牌 新闻数据
		getInfo() {
			uni.request({
				url:
					this.$baseUrl +
					'/newWatch/api/indexMsGet?page=' +
					this.page +
					'&pageNum=10',
				header: {
					'content-type': 'application/json',
				},
				complete: (res) => {
					this.allClassifyList = res.data.brandList.slice(0, 4);
					this.articles = res.data.articleRes;
				},
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
		goJumpUrl(url) {
			if (url) {
				if (url == '/pages/recycle') {
					uni.switchTab({ url: url });
				} else {
					uni.navigateTo({ url: url });
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.main {
	.index-main-container {
		background-color: #f4f8fb;
		.index-top {
			padding-top: 60rpx;
			background-color: #fff;

			.search {
				margin: 0 24rpx 30rpx 24rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: left;
				align-items: center;
				height: 66rpx;
				line-height: 66rpx;
				background-color: #f4f7fc;
				border-radius: 20rpx;
				font-size: 24rpx;
				color: #c0c5ce;

				.search-icon {
					width: 38rpx;
					height: 38rpx;
				}

				.font {
					margin-left: 9rpx;
					color: #888a8c;
				}
			}

			// 容器
			::-webkit-scrollbar {
				width: 0;
				height: 0;
				color: transparent;
			}

			@-webkit-keyframes free_download {
				0% {
					-webkit-transform: scale(0.9);
				}

				100% {
					-webkit-transform: scale(1);
				}
			}

			@keyframes free_download {
				0% {
					transform: scale(0.9);
				}

				100% {
					transform: scale(1);
				}
			}
		}

		.content-wrapper {
			.swiper-box {
				margin: 20rpx 24rpx 30rpx;

				.swiper-list {
					height: 100%;
					height: 280rpx;
				}
				.every-img {
					width: 702rpx;
				}
			}

			.news-box {
				margin: 39rpx 24rpx 0;
				padding: 16rpx 24rpx;
				display: flex;
				align-items: center;
				border-radius: 12rpx;
				background-color: #f4f8fb;
				.news-left {
					.news-left-icon {
						width: 74rpx;
						height: 64rpx;
					}
				}

				.news-right {
					margin-left: 34rpx;
					font-size: 28rpx;
					color: #03314b;
					line-height: 80rpx;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					flex: 1;
				}
			}

			.goods-box {
				width: 100%;
				padding: 0 24rpx 20rpx;
				box-sizing: border-box;
				background: #f4f8fb;

				.title-cover-img {
					.title-img {
						height: 35rpx;
						margin: 45rpx 0;
					}
				}
				.goods-list {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;

					.goods-item {
						width: 340rpx;
						padding: 20rpx 0 30rpx;
						border-radius: 20rpx;
						background-color: #fff;
						position: relative;
						margin-bottom: 20rpx;
						overflow: hidden;

						.specialImg {
							position: absolute;
							top: 10rpx;
							right: 0;
							width: 100rpx;
							height: 113rpx;
						}

						/deep/ .easy-loadimage {
							width: 100%;
							text-align: center;
						}

						.img {
							// width: 200rpx;
							height: 300rpx;
							margin: 0 auto;
							border-radius: 20rpx;
						}

						.info-card {
							padding: 0 15rpx;
							box-sizing: border-box;
							.title {
								margin-top: 20rpx;
								font-size: 28rpx;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								color: #03314b;
							}

							.price {
								margin-top: 12rpx;
								font-size: 22rpx;
								color: #1ecc99;
								font-weight: bold;
							}
						}
					}
				}

				.more-btn {
					width: 214rpx;
					height: 80rpx;
					border-radius: 75rpx;
					border: 2rpx solid #a9aeb2;
					text-align: center;
					line-height: 80rpx;
					font-size: 28rpx;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #03314b;
					margin: 40rpx auto 0;
				}
			}

			.brand-box {
				height: fit-content;
				padding: 0 40rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 40rpx;

				// 容器项
				.classify-every {
					height: fit-content;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.img {
						width: 96rpx;
						height: 96rpx;
						border-radius: 50%;
					}

					.text {
						width: 96rpx;
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #03314b;
						text-align: center;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}

					.circle {
						height: 96rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						.circle01 {
							width: 6rpx;
							height: 6rpx;
							background-color: #03314b;
							border-radius: 50%;
						}

						.circle02 {
							width: 9rpx;
							height: 9rpx;
							margin: 0 10rpx;
							background-color: #03314b;
							border-radius: 50%;
						}
					}
				}
			}

			// 精品
			.discounts-box {
				width: calc(100% - 48rpx);
				height: 518rpx;

				box-sizing: border-box;
				position: relative;
				margin: 40rpx 24rpx 30rpx;
				text-align: center;
				box-sizing: border-box;
				.bg-img {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
				}

				.discounts-top {
					width: 100%;
					padding: 35rpx 24rpx 0;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					position: relative;
					.title-img {
						width: 136rpx;
					}
					.more-img {
						width: 122rpx;
						height: 25rpx;
					}

					.top-time {
						display: flex;
						align-items: center;
						color: #666666;
						font-size: 24rpx;

						.time-every {
							margin-left: 6rpx;
							padding: 6rpx;
							background-color: #323140;
							color: #fff;
							border-radius: 6rpx;
						}

						.maohao {
							margin-left: 6rpx;
						}
					}
				}

				.discounts-scroll-box {
					width: 100%;
					height: fit-content;
					margin-top: 35rpx;
					white-space: nowrap;

					.scroll-item {
						width: 272rpx;
						// height: fit-content;
						height: 370rpx;
						margin-right: 35rpx;
						display: inline-block;
						position: relative;
						.item-img {
							// width: 179rpx;
							width: 236rpx;
							height: 264rpx;
							border-radius: 30rpx;
							z-index: 9;
							position: relative;
							margin: 0 auto;
							image {
								width: 100%;
								height: 100%;
							}
						}

						.item-name {
							font-size: 26rpx;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							z-index: 9;
							position: relative;
							padding: 0 20rpx;
							box-sizing: border-box;
							margin-top: 30rpx;
							color: #03314b;
						}

						.info-bg {
							width: 100%;
							height: 320rpx;
							// background: #e9edf0;
							border-radius: 20rpx 20rpx 20rpx 20rpx;
							position: absolute;
							bottom: 0;
						}
					}
				}
			}
		}

		.downloadApp {
			position: fixed;
			bottom: 120px;
			right: 40rpx;
			text-align: center;
			z-index: 990;

			.downloadApp-img {
				width: 80rpx;
				height: 80rpx;
			}

			.downloadApp-font {
				padding: 8rpx 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				background-color: #1ecc99;
				border-radius: 30px;
				color: #fff;
			}
		}

		.jump {
			width: 100%;
			height: 100vh;
			background-color: rgba($color: #000000, $alpha: 0.7);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			text-align: center;

			image {
				width: 481rpx;
				height: 352rpx;
				margin: 0 auto;
				margin-top: 150rpx;
				margin-right: 50rpx;
			}

			.jump-top {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 40rpx;
				font-size: 26rpx;
				color: #fff;

				.jump-circle {
					width: 5px;
					height: 5px;
					margin: 0 2px;
					border-radius: 50%;
					background-color: #fff;
				}
			}

			.jump-bottom {
				margin-top: 5px;
				font-size: 26rpx;
				color: #fff;
			}
		}

		.downloadSel {
			width: 100%;
			height: 100vh;
			background-color: rgba($color: #000000, $alpha: 0.7);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;

			.sel-bottom {
				width: 462rpx;
				height: 232rpx;
				margin: 0 auto;
				margin-top: 18rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: url(../static/imgs/index/back02.png) no-repeat;
				background-size: 100%;

				image {
					width: 58rpx;
					height: 57rpx;
					margin-right: 20rpx;
				}

				text {
					font-weight: bold;
					font-size: 30rpx;
					color: #1ecc99;
					border-bottom: 4rpx solid #1ecc99;
				}
			}

			.sel-close {
				margin-top: 100rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}
}
</style>
<style>
.uni-noticebar {
	padding: 0;
	margin-bottom: 0;
}
</style>
