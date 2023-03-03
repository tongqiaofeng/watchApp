<template>
	<view>
		<uni-table stripe emptyText="暂无更多数据">
			<uni-tr style="">
				<uni-th v-for="(head, index) in tableHead" :key="index" style="font-size: 24rpx;" align="right" :sortable="head.sort" @sort-change="sortChange($event, index)" :width="head.width">{{head.name}}</uni-th>
			</uni-tr>
			<uni-tr v-for="(row, index) in datas" :key="index">
				<uni-td v-for="(cel, index2) in row.cells" :key="index2" style="font-size: 22rpx;" align="right" >
					<text @click="itemClick(cel, index, index2)">{{showValue(cel.value, index2)}}</text>
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tableHead:[],
				datas:[] 
			}
		},
		onLoad(){
			this.tableHead = getApp().globalData.pageInItem.tableHead;
			this.datas = getApp().globalData.pageInItem.datas;
			let title = getApp().globalData.pageInItem.title;
			if(title){
				uni.setNavigationBarTitle({ title:title })
			}
		},
		onReady() {
			this.hidePageNavInWechatBrowser();
		},
		methods: {
			sortChange(e, index){
				if(e.order == 'ascending'){
					this.datas.sort((a, b)=>{
						if(index == 0)
							return a.cells[index].value.localeCompare(b.cells[index].value);
						else
							return a.cells[index].num - b.cells[index].num;
					})
				}
				else if(e.order == 'descending'){
					this.datas.sort((a, b)=>{
						if(index == 0)
							return b.cells[index].value.localeCompare(a.cells[index].value);
						else
							return b.cells[index].num - a.cells[index].num;
					})
				}
			},
			itemClick(cel, row, col){
				if(this.tableHead[col].name.indexOf('型号') > -1){
					uni.navigateTo({
						url: "../common/search?keyword=" +
							encodeURIComponent(JSON.stringify(cel.value)),
					});
				}
				
			},
			showValue(src, idx){
				if(idx == 0)
					return src.substring(0, 18);
				else
					return src;
			}
		}
	}
</script>

<style>

</style>
