<template>
	<view class="commodity">
		<view v-if="haveData == 0" class="no-data">
			<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
			<text style="font-size: 30rpx">暂无浏览记录~</text>
		</view>
		<view v-else>
			<view class="commodity-mian-container">
				<slide-list :list="favoriteslist" :threshold="threshold" @click="rowClick" @optionClick="optionClick"
					:options="options">
				</slide-list>
				<view class="bottom">没有更多了~</view>
			</view>
		</view>
	</view>
</template>

<script>
	import slideList from '@/components/left-slide/left-slide-list.vue';
	export default {
		components: {
			slideList
		},
		data() {
			return {
				isShow: false,
				imgUrl: this.$baseUrl + "/jewellery/api",

				haveData: 1,
				goodsnum: 0,
				page: 1,
				favoriteslist: [],

				selList: [],

				options: [ //左滑的操作列表
					{
						color: '#ffffff', //字体颜色，非必须，默认 #ffffff
						bgColor: '#FF4533', //背景颜色，非必须，默认 #409EFF
						text: '删除', //展示文字
						width: 120, //按钮宽度 默认120rpx 适合两个字的宽度 这个宽度按需调整
					}
				],
				threshold: 50,
			};
		},
		mounted() {
		
		},
		onLoad() {
			this.favorites();
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		onPullDownRefresh() {
			this.favoriteslist = [];
			this.favorites();
			uni.stopPullDownRefresh();
		},
		methods: {
			// 查看详情
			rowClick(item) {
				console.log('点击某一行');
				console.log(item);
				if (item) {
					uni.navigateTo({
						url: "../watch/detail?id=" + item.id,
					});
				}
			},
			// 删除
			optionClick(item, oitem) {
				console.log('点击某个操作按钮');
				console.log(item, oitem)
				if (oitem.text == '删除') {
					this.selList = [];
					this.selList.push(item.id);
					console.log(this.selList);
					this.clickclose();
				}
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取浏览记录列表
			favorites() {
				uni.showLoading({
					title: "加载中...",
				});
				uni.request({
					url: this.$baseUrl + "/newWatch/api/browseRecords",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					complete: (res) => {
						uni.hideLoading();

						console.log("浏览记录列表");
						console.log(res);

						this.favoriteslist = res.data;
						this.goodsnum = res.data.length;

						if (this.favoriteslist.length == 0) {
							this.haveData = 0;
						} else {
							this.haveData = 1;
						}
						
						uni.setNavigationBarTitle({
							title: '浏览记录(' + this.goodsnum + ')' 
						})

						this.isShow = true;
					},
				});
			},
			// 删除
			clickclose() {
				console.log(this.selList);
				uni.request({
					method: "DELETE",
					url: this.$baseUrl + "/newWatch/api/browseRecordDel",
					data: {
						watchIdList: this.selList,
					},
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					success: (res) => {
						console.log(res.data);
						this.selList = [];
						this.favoriteslist = [];
						uni.showToast({
							title: "删除成功",
							icon: "none",
						});
						this.favorites();
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.message,
							icon: "none",
						});
					},
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.commodity {
		min-height: 100vh;
		background-color: #F4F8FB;
		position: relative;
		
		.no-data{
			padding-top: 100rpx;
		}

		.commodity-mian-container {
			padding: 20rpx 24rpx;
		}

		.bottom {
			padding-bottom: 140rpx;
			font-size: 24rpx;
			color: #e3e3e3;
			text-align: center;
			font-size: 30rpx;
		}
	}
</style>
