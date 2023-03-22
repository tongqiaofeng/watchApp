<template>
	<view>
		<view>
			<view v-if="type == 0">
				<view
					class="user-wrapper"
					v-for="(user, index) in userList"
					:key="index"
				>
					<view class="flex-row" @click="goToChat(user)">
						<view class="info">
							<image
								class="service-icon"
								:src="
									user.headPic
										? baseFileUrl + '/file/' + user.headPic
										: '../static/imgs/mine/avatar.png'
								"
								mode="aspectFill"
							></image>
							<view class="name">{{
								user.nick ? user.nick : '客服' + user.id
							}}</view>
						</view>
						<image
							class="arrow-right-icon"
							src="../static/imgs/common/array_right_icon.png"
						></image>
					</view>
				</view>

				<view
					class="user-wrapper"
					v-for="(item, index) in serviceList"
					:key="index"
				>
					<view class="flex-row" @click="showService(item)">
						<view class="info">
							<image
								class="service-icon"
								:src="baseFileUrl + '/file/' + item.headImg"
							></image>
							<view class="name">{{ item.title }}</view>
						</view>
						<image
							class="arrow-right-icon"
							src="../static/imgs/common/array_right_icon.png"
						></image>
					</view>
				</view>
			</view>
			<view v-else class="service-container">
				<!-- 联系客服 -->
				<view class="" v-for="(item, index) in serviceMsg" :key="index">
					<view class="every-loc">
						{{ item.loc }}
					</view>
					<view
						class="msg-every"
						v-for="(items, index2) in dataFilter(item)"
						:key="index2"
					>
						<view class="every-left">
							<image :src="imgSel(items)" mode="aspectFill"></image>
							<text class="font-one">{{ items.split(':')[1] }}</text>
						</view>
						<text class="copyButton" @click="copy(items)">复制</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 二维码图片 -->
		<view class="code-popup-box">
			<uni-popup ref="codePopup" type="center">
				<view class="content">
					<image class="code-img" v-if="codeImg" :src="codeImg"></image>
				</view>
			</uni-popup>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			baseFileUrl: this.$baseFileUrl,
			userList: [],
			type: -1,
			img1: require('../static/imgs/service/WeChat.png'),
			img2: require('../static/imgs/service/WhatsApp.png'),
			img3: require('../static/imgs/service/Instagram.png'),
			serviceMsg: '',
			detail: null,
			serviceList: [],
			codeImg: '', // 二维码地址
		};
	},
	onLoad() {
		if (getApp().globalData.pageInItem) {
			this.detail = getApp().globalData.pageInItem;
			getApp().globalData.pageInItem = '';
		}
		let userId = getApp().globalData.userInfo.userId;
		if (userId == 19) {
			this.type = 1;
			this.getService();
		} else {
			this.getNewService();
		}
		this.getCustomerServiceList();
	},
	mounted() {},
	onShow() {},
	onReady() {
		this.hidePageNavInWechatBrowser();
	},
	methods: {
		dataFilter(item) {
			return item.contactMsg.split(/[\n]/);
		},
		// 获取联系方式
		getService() {
			uni.request({
				url: this.$baseUrl + '/wechat/api/contactGet?id=' + '0',
				header: {
					'content-type': 'application/json',
					token: uni.getStorageSync('token'),
				},
				complete: (res) => {
					this.serviceMsg = res.data;
					this.type = 1;
				},
			});
		},
		getNewService() {
			uni.showLoading({
				title: '数据加载中...',
			});
			uni.request({
				method: 'GET',
				url:
					this.$baseUrl +
					'/newWatch/api/contactGet?inviteCode=' +
					uni.getStorageSync('superiorInviteCode') +
					'&type=1',
				header: {
					'content-type': 'application/json',
					token: uni.getStorageSync('token'),
				},
				success: (res) => {
					let userList = res.data;
					if (userList) {
						this.type = 0;
						this.userList = res.data;
					} else {
						this.getService();
					}
				},
				complete: () => {
					uni.hideLoading();
				},
			});
		},
		// 联系方式列表
		getCustomerServiceList() {
			uni.showLoading({
				title: '数据加载中...',
			});
			uni.request({
				method: 'GET',
				url: this.$baseUrl + '/newWatch/api/customerServiceList',
				header: {
					'content-type': 'application/json',
					token: uni.getStorageSync('token'),
				},
				success: (res) => {
					const { data } = res.data;
					this.serviceList = data;
					console.log('联系方式', data);
				},
				complete: () => {
					uni.hideLoading();
				},
			});
		},

		// 复制
		copy(item) {
			uni.setClipboardData({
				data: item.split(':')[1], //要被复制的内容
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
		imgSel(item) {
			let font = item.split(':')[0].trim();
			switch (font) {
				case 'WeChat ID':
					return this.img1;
				case 'WhatsApp':
					return this.img2;
				case 'Instagram':
					return this.img3;
				default:
					break;
			}
		},
		goToChat(user) {
			if (this.detail) getApp().globalData.pageInItem = this.detail;
			uni.setStorageSync('service_tag', user.tag);
			uni.navigateTo({
				url: '../chat/chat?id=TopTime_' + user.id + '&name=' + user.nick,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			});
		},
		showService(item) {
			this.codeImg = '';
			if (item && item.codeImg) {
				// 二维码
				this.codeImg = this.baseFileUrl + '/file/' + item.codeImg;
				this.$refs.codePopup.open();
			} else if (item && item.addr) {
				// 地址
				let isPhone = this._checkPhone(item.addr);
				if (isPhone) {
					// 手机号码
					uni.makePhoneCall({
						phoneNumber: item.addr,
					});
				} else if (this._checkEmail(item.addr)) {
					// 邮箱
					uni.setClipboardData({
						data: item.addr,
						success: () => {
							uni.showToast({
								title: '邮箱复制成功',
								icon: 'none',
							});
						},
					});
				} else {
					uni.navigateTo({ url: `../my/serviceWebview?url=${item.addr}` });
				}
			}
		},
		_checkPhone(tel) {
			let reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
			return reg.test(tel);
		},
		_checkEmail(value) {
			let reg = /^[0-9a-z\._]+@[0-9a-z\._]+$/;
			return reg.test(value);
		},
	},
};
</script>
<style lang="scss" scoped>
.user-wrapper {
	.flex-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #f0f0f0;

		padding: 20rpx 30rpx;
		box-sizing: border-box;
		.info {
			display: inline-flex;
			align-items: center;
			.service-icon {
				width: 96rpx;
				height: 96rpx;
				margin: 0rpx 30rpx 0 0;
				border-radius: 80rpx;
			}
			.name {
				font-size: 30rpx;
				color: #03314b;
			}
		}

		.arrow-right-icon {
			width: 14rpx;
			height: 24rpx;
		}
	}
}

.service-container {
	padding: 30rpx;
	padding-top: 0;

	.every-loc {
		padding-top: 30rpx;
		padding-bottom: 20rpx;
		font-size: 30rpx;
	}

	.msg-every {
		height: 88rpx;
		padding-right: 20rpx;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f9f9f9;
		border-radius: 20rpx;

		.every-left {
			display: flex;
			align-items: center;

			image {
				width: 56rpx;
				height: 56rpx;
				margin: 0 20rpx;
			}

			.font-one {
				font-size: 30rpx;
				color: #303030;
			}
		}

		.copyButton {
			margin-left: 30rpx;
			font-size: 26rpx;
			color: #85dbd0;
		}
	}
}

.code-popup-box {
	.code-img {
		width: 600rpx;
		height: 600rpx;
	}
}
</style>
