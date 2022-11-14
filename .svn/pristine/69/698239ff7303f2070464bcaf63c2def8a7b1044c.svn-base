<template>
	<view class="content">
		<view class="list">
			<view class="name">离线时自动回复消息：</view>
			<textarea class="value" v-model="offLineMsg"></textarea>
		</view>
		<view class="submit-btn" @click="saveSetting"> 设置 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				offLineMsg:''
			}
		},
		onLoad()
		{
			this.offLineMsg = getApp().globalData.g_chat.UserChatSetting.offLineMsg;
		},
		methods: {
			saveSetting()
			{
				if(getApp().globalData.g_chat)
				{
					getApp().globalData.g_chat.updateUserSetting(this.offLineMsg);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx 20rpx 40rpx;
		background-color: #f4f8fb;
	}
	
	.list{
		background-color: white;
		border-radius: 20rpx;
		padding: 20rpx;
		
		.name{
			font-size: 24rpx;
		}
		
		.value{
			margin-top: 10rpx;
			font-size: 26rpx;
			width: 670rpx;
			height: 200rpx;
			background-color: #f4f8fb;
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
</style>
