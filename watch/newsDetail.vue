<template>
	<view class="content">
		<view class="title">{{ detail.title }}</view>
		<view class="time">{{ detail.gmtCreate }}</view>
		<rich-text class="txt" :nodes="detail.content"></rich-text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			detail: {
				title: '',
				gmtCreate: '',
				content: '',
			},
		};
	},
	onLoad(e) {
		this.id = e.id;
		this.getDetail();
	},
	onShow() {
		this.hidePageNavInWechatBrowser();
	},
	onPullDownRefresh() {
		this.getDetail();
		uni.stopPullDownRefresh();
	},
	onNavigationBarButtonTap(e) {
		uni.shareWithSystem({
			summary: this.detail.title,
			href: 'https://toptimeclub.com/watch/newsDetail?id=' + this.id,
			success() {},
			fail() {},
		});
	},
	methods: {
		getDetail() {
			uni.showLoading({
				title: '数据加载中...',
			});
			uni.request({
				url: this.$baseUrl + '/article/api/articleInfo',
				header: {
					'content-type': 'application/json',
					token: uni.getStorageSync('token'),
				},
				data: {
					id: this.id,
				},
				complete: (res) => {
					console.log('详情', res);
					uni.hideLoading();
					this.detail = res.data.data;
					this.detail.content = this.formatRichText(this.detail.content);
				},
			});
		},
		formatRichText(html) {
			let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
				match = match
					.replace(/style="[^"]+"/gi, '')
					.replace(/style='[^']+'/gi, '');
				match = match
					.replace(/width="[^"]+"/gi, '')
					.replace(/width='[^']+'/gi, '');
				match = match
					.replace(/height="[^"]+"/gi, '')
					.replace(/height='[^']+'/gi, '');
				return match;
			});
			newContent = newContent.replace(
				/style="[^"]+"/gi,
				function (match, capture) {
					match = match
						.replace(/width:[^;]+;/gi, 'max-width:100%;')
						.replace(/width:[^;]+;/gi, 'max-width:100%;');
					return match;
				}
			);
			newContent = newContent.replace(/<br[^>]*\/>/gi, '');
			newContent = newContent.replace(
				/\<img/gi,
				'<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
			);
			return newContent;
		},
	},
};
</script>

<style lang="scss" scoped>
.content {
	padding: 20rpx;

	.title {
		font-size: 40rpx;
		color: #03314b;
		font-weight: bold;
	}

	.time {
		font-size: 24rpx;
		color: #bbbbbb;
		text-align: right;
		margin: 10rpx 0 20rpx 0;
	}

	.txt {
		font-size: 30rpx;
	}
}
</style>
