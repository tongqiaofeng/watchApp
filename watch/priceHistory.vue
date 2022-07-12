<template>
	<view class="stock-number-container">
		<uni-table border stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th align="center">价格</uni-th>
				<uni-th align="center">录入时间</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in marketPriceList" :key="index">
				<uni-td align="center">
					{{getPrice(item.price,item.currency)}}
				</uni-td>
				<uni-td align="center">
					{{item.time}}
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				marketPriceList: null,

			}
		},
		onLoad(option) {
			this.marketPriceList = JSON.parse(decodeURIComponent(option.marketPriceList));
			console.log(this.marketPriceList);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.stock-number-container {
		min-height: 100vh;
		padding: 24rpx 24rpx 30rpx;
		background-color: #F4F8FB;
	}
</style>
