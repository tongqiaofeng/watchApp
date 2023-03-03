<template>
	<scroll-view scroll-x="true" :style="{ height: widowHeight + 'px' }">
		<uni-table class="trans" :style="{ width: tableWidth + 'px' }" stripe emptyText="暂无更多数据">
			<uni-tr>
				<uni-th v-for="(head, index) in tableHead" :key="index" style="font-size: 24rpx;" align="right"
					:sortable="head.sort" @sort-change="sortChange($event, index)" :width="head.width">{{head.name}}
				</uni-th>
			</uni-tr>
			<uni-tr v-for="(row, index) in datas" :key="index">
				<uni-td v-for="(cel, index2) in row.cells" :key="index2" style="font-size: 22rpx;" align="right">
					{{cel.value}}
				</uni-td>
			</uni-tr> 
		</uni-table>
	</scroll-view>
		
</template>

<script>
	export default {
		data() {
			return {
				tableHead: [],
				datas: [],
				islandscape: true, //是否横屏
				widowHeight:800,
				tableWidth:800,
			}
		},
		onLoad() {
			const windowResizeCallback = (res) => {
				this.resize();
			}
			uni.onWindowResize(windowResizeCallback)

			this.tableHead = getApp().globalData.pageInItem.tableHead;
			this.datas = getApp().globalData.pageInItem.datas;
			let title = getApp().globalData.pageInItem.title;
			if (title) {
				uni.setNavigationBarTitle({
					title: title
				})
			}
		},
		onReady() {
			
			let bWX = this.hidePageNavInWechatBrowser();
			
			uni.getSystemInfo({
				success: (data) => {
					this.widowHeight = data.windowHeight;
					this.tableWidth = this.widowHeight - uni.upx2px(20);
					
					if(bWX){
						this.widowHeight += data.windowTop;
						this.tableWidth += data.windowTop;
					}
				},
			});
		},
		methods: {
			sortChange(e, index) {
				if (e.order == 'ascending') {
					this.datas.sort((a, b) => {
						if (index == 0)
							return a.cells[index].value.localeCompare(b.cells[index].value);
						else
							return a.cells[index].num - b.cells[index].num;
					})
				} else if (e.order == 'descending') {
					this.datas.sort((a, b) => {
						if (index == 0)
							return b.cells[index].value.localeCompare(a.cells[index].value);
						else
							return b.cells[index].num - a.cells[index].num;
					})
				}
			},
			resize() {
				const width = uni.getWindowInfo().windowWidth;
				const height = uni.getWindowInfo().windowHeight;
				setTimeout(function() {
					if (width > height) {
						this.islandscape = false;
						//业务逻辑
					} else {
						this.islandscape = true;
						//业务逻辑
					}
					console.log(this.islandscape)
				}.bind(this), 100);
			},
			backMethod() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	

	.trans {
		position: absolute;
		top: -100vw;
		width: calc(100vh - 20rpx);
		height: 100vw;
		transform: rotate(90deg);
		transform-origin: bottom left;
		margin: 10rpx 0;
	}
</style>
