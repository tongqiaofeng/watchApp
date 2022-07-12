<template>
	<view class="update-phone-container">
		<uni-forms ref="emailForm" :modelValue="emailData" :rules="emailRules">
			<uni-forms-item name="newPhone">
				<view class="update-phone">
					<view class="phone-left">
						<text class="update-font">邮箱：</text>
						<input type="text" class="update-input" v-model="emailData.newPhone" placeholder="请输入要绑定的新邮箱" />
					</view>
				</view>
			</uni-forms-item>
			<uni-forms-item name="newCode">
				<view class="update-phone" style="padding-right: 0;">
					<view class="phone-left">
						<text class="update-font">验证码：</text>
						<input type="text" class="update-input" v-model="emailData.newCode" placeholder="请输入验证码" />
					</view>
					<button type="text" :plain="true" size="mini" style="border: none" @click="getCode"
						class="phone-right" :disabled="disable" :class="{ codeGeting: isGeting }">
						{{ time }}
					</button>
				</view>
			</uni-forms-item>
		</uni-forms>

		<view class="update-button" @click="updatePhoneNumber">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				emailData: {
					newPhone: "",
					newCode: "",
				},
				emailRules: {
					newPhone: {
						rules: [{
							required: true,
							errorMessage: "邮箱地址不能为空",
							trigger: "blur",
						}, {
							format: "email",
							errorMessage: "邮箱地址格式错误",
						}],
					},
					newCode: {
						rules: [{
							required: true,
							errorMessage: "请输入验证码",
							trigger: "blur",
						}, ],
					}
				},

				time: "获取验证码",
				count: 59,
				isGeting: false,
				disable: false,
				countDown: null,
			};
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		methods: {
			// 修改邮箱
			updatePhoneNumber() {
				console.log(this.emailData);
				this.$refs.emailForm
					.validate()
					.then((res) => {
						console.log("验证通过");
						uni.$emit('updateEmail', {
							newPhone: this.emailData.newPhone,
							newCode: this.emailData.newCode,
						})

						uni.navigateTo({
							url: "./updateMyMsg",
						});
					})
					.catch((err) => {
						console.log("表单错误", err);
					});
			},
			// 获取验证码
			getCode() {
				if (this.emailData.newPhone == "") {
					uni.showToast({
						title: "请输入邮箱",
						icon: "none",
					});
				} else {
					uni.showLoading({
						title: "验证码获取中...",
					});
					uni.request({
						method: "GET",
						url: this.$baseUrl + "/wechat/api/smsCodeGet",
						header: {
							"content-type": "application/json",
						},
						data: {
							phoneNumber: this.emailData.newPhone,
							type: "2"
						},
						complete: (res) => {
							uni.hideLoading();
							if (res.statusCode == 200) {
								this.countDown = setInterval(() => {
									if (this.count < 1) {
										this.isGeting = false;
										this.disable = false;
										this.time = "获取验证码";
										this.count = 59;
										console.log(this.time);
										clearInterval(this.countDown);
										this.countDown = null;
									} else {
										this.isGeting = true;
										this.disable = true;
										this.time = this.count-- + "s后可重发";
									}
								}, 1000);
							}
							if (this.checkBack(res, true) == false) return;

							this.$isResolve();
						},
					});
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.update-phone-container {
		width: 100%;
		height: 100vh;
		background-color: #F4F8FB;

		.update-phone {
			height: 86rpx;
			padding: 0 40rpx;
			margin-top: 1px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;

			.phone-left {
				display: flex;
				align-items: center;
				flex: 1;

				.update-font {
					font-size: 28rpx;
					color: #000;
					font-weight: bold;
				}

				.update-input {
					flex: 1;
					color: #c3c3c3;
					font-size: 28rpx;
				}
			}

			.phone-right {
				color: #000;
				font-size: 28rpx;
			}

			.codeGeting {
				color: #c3c3c3;
			}
		}

		.update-button {
			width: 90%;
			height: 80rpx;
			margin: 0 auto;
			margin-top: 50rpx;
			line-height: 80rpx;
			cursor: pointer;
			background-color: #1ECC99;
			color: #fff;
			font-size: 26rpx;
			border-radius: 60rpx;
			text-align: center;
		}
	}
</style>