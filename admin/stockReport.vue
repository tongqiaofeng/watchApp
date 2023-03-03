<template>
	<view class="content">
		<popwndSelect :visible.sync="bShowStock" strTitle="请选择仓库" strName="name" :lst="stockList" :sel="stockIdx" @confirm="stockChange"/>
			
		<view class="select sticky" :style="{ top: windowTop + 'px' }">
			<view class="name" @click="bShowStock = true">{{stockList[stockIdx].name}}</view>
			<view :class="['item', {'noneSel':index != curSel}]" v-for="(item, index) in selValue" :key="index" @click="selChange(index)">
				{{item}}
			</view>
		</view>
		
		<view class="chart">
			
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">仓库概况</view>
				</view>
			</view>
			
			<view style="display: flex; justify-content: space-around;">
				<view>
					<canvas canvas-id="arcbar1" id="arcbar1" style="width: 250rpx; height: 250rpx;" />
					<view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx; text-align: center; ">{{arcbar1_value}}</view>
				</view>
				
				<view>
					<canvas canvas-id="arcbar2" id="arcbar2" style="width: 250rpx; height: 250rpx;" />
					<view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx; text-align: center; ">{{arcbar2_value}}</view>
				</view>
			</view>
		</view>
		
		
		
		<view v-if="stockIdx == 0" class="chart">
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">仓库分布</view>
				</view>
				
				<view class="row vCenter" @click="gotoTable(0)">
					<view class="more">详情</view>
					<image src="../static/imgs/common/right.png" mode="aspectFit" style="width: 35rpx; height: 35rpx;"></image>
				</view>
			</view>
			
			<canvas canvas-id="pie1" id="pie1" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">货源分布</view>
				</view>
				
				<view class="row vCenter" @click="gotoTable(1)">
					<view class="more">详情</view>
					<image src="../static/imgs/common/right.png" mode="aspectFit" style="width: 35rpx; height: 35rpx;"></image>
				</view>
			</view>
			
			<canvas canvas-id="pie2" id="pie2" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">采购日期分布</view>
				</view>
				
				<view class="row vCenter" @click="gotoTable(2)">
					<view class="more">详情</view>
					<image src="../static/imgs/common/right.png" mode="aspectFit" style="width: 35rpx; height: 35rpx;"></image>
				</view>
			</view>
			
			<canvas canvas-id="pie3" id="pie3" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">品牌分布</view>
				</view>
				
				<view class="row vCenter" @click="gotoTable(3)">
					<view class="more">详情</view>
					<image src="../static/imgs/common/right.png" mode="aspectFit" style="width: 35rpx; height: 35rpx;"></image>
				</view>
			</view>
			
			<canvas canvas-id="pie4" id="pie4" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="row vCenter">
					<view class="img"></view>
					<view class="name">型号分布</view>
				</view>
				
				<view class="row vCenter" @click="gotoTable(4)">
					<view class="more">详情</view>
					<image src="../static/imgs/common/right.png" mode="aspectFit" style="width: 35rpx; height: 35rpx;"></image>
				</view>
			</view>
			
			<canvas canvas-id="pie5" id="pie5" style="width: 700rpx; height: 500rpx;" />
		</view>
	
		
	</view>
</template>

<script>
	
	import popwndSelect from "@/components/popwnd/popwnd_select_blue.vue";	
	import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
	var uChartsInstance = {};
	
	export default {
		components: {
			popwndSelect
		},
		data() {
			return {
				windowTop:44,
				data:{},
				bShowStock:false,
				stockIdx:0,
				stockList: [ { name:'全部仓库', id:0} ],
				
				selValue: ['金额', '数量'],
				curSel: 0,
				
				arcbar1_value:'',
				arcbar2_value:'',
			}
		},
		onLoad(){			
			this.getInfo();
		},
		onReady() {
			if(this.hidePageNavInWechatBrowser()){
				this.windowTop = 0;
			}
			else{
				uni.getSystemInfo({
					success: (data) => {
						this.windowTop = data.windowTop;
					},
				});
			}	
		},
		onPullDownRefresh(){
			this.getInfo();
			uni.stopPullDownRefresh();
		},
		methods: {
			getInfo(){
				
				uni.showLoading({
					title: "加载中...",
				});
				let warehouseId = 0;
				if(this.stockIdx > 0)
					warehouseId = this.stockList[this.stockIdx].id;

					
				uni.request({
					url: this.$baseUrl + "/api/watch/stock/warehouseReportDataGet",
					timeout:120000,
					header: {
						'content-type': "application/json",
						token: uni.getStorageSync("token"),
					},
					data:{
						warehouseId: warehouseId,
					},
					success: (res) => {
						uni.hideLoading();
						
						if(this.checkBack(res) == false) return;
						
						this.data = res.data.data;
						
						if(this.data.deptDistributionDetail){
							this.data.deptDistributionDetail.typeAmountDetailList = this.findArrValue(this.data.deptDistributionDetail.typeAmountDetailList, '业务');
							this.data.deptDistributionDetail.typeNumDetailList = this.findArrValue(this.data.deptDistributionDetail.typeNumDetailList, '业务');
						}
						
						if(this.data.warehouseList){
							this.stockList = this.data.warehouseList;
						}
						this.initChart();
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title:'加载超时，请下拉重试',
							icon: 'none',
							duration:2500
						})
					},
				});
				
			},
			stockChange(e){
				this.stockIdx = e.sel;
				this.getInfo();
			},
			selChange(idx) {
				this.curSel = idx;
				this.initChart();
			},
			initChart()
			{
				//采购概况
				let arcbar1_percent = 100;
				this.arcbar1_value = this.data.allCostAmount;
				let arcbar2_percent = 100;
				this.arcbar2_value = this.data.allWatchQuantity;
				
				this.arcbar1_value = this.getPrice(this.arcbar1_value, 'HKD', '0', 0);
				this.arcbar2_value = this.getPrice(this.arcbar2_value, '', '0', 0);
				
				this.drawArcbar("arcbar1", 250, arcbar1_percent/100, "#1890FF", '货物金额', '');
				this.drawArcbar("arcbar2", 250, arcbar2_percent/100, "#91CB74", '货物数量', '');
			
				//仓库分布
				if(this.stockIdx == 0){
					let pie1_Data = this.data.warehouseDistributionDetail == null ? [] : this.curSel == 0 ? this.data.warehouseDistributionDetail.typeAmountDetailList : this.data.warehouseDistributionDetail.typeNumDetailList;
					this.drawPie("pie1", [{ data : pie1_Data }]);
				}
				
				//货源分布
				let pie2_Data =  this.data.deptDistributionDetail == null ? [] : this.curSel == 0 ? this.data.deptDistributionDetail.typeAmountDetailList : this.data.deptDistributionDetail.typeNumDetailList;
				pie2_Data = this.changeData(pie2_Data, 8);
				this.drawPie("pie2", [{ data : pie2_Data }]);
				
				//采购日期分布
				let pie3_Data =  this.data.dateDistributionDetail == null ? [] : this.curSel == 0 ? this.data.dateDistributionDetail.typeAmountDetailList : this.data.dateDistributionDetail.typeNumDetailList;
				pie3_Data = this.changeData(pie3_Data, 8);
				this.drawPie("pie3", [{ data : pie3_Data }]);
				
				//品牌分布
				let pie4_Data =  this.data.brandDistributionDetail == null ? [] : this.curSel == 0 ? this.data.brandDistributionDetail.typeAmountDetailList : this.data.brandDistributionDetail.typeNumDetailList;
				pie4_Data = this.changeData(pie4_Data, 8);
				this.drawPie("pie4", [{ data : pie4_Data }]);
				
				//型号分布
				let pie5_Data = this.data.modelDistributionDetail == null ? [] : this.curSel == 0 ? this.data.modelDistributionDetail.typeAmountDetailList : this.data.modelDistributionDetail.typeNumDetailList;
				pie5_Data = this.changeData(pie5_Data, 8);
				this.drawPie("pie5", [{ data : pie5_Data }]);
				
			},
			changeData(data, len){
				if(data.length <= len)
					return data;
				else{
					let ret = [];
					for(let i = 0; i < len-1; ++i){
						ret.push(data[i]);
					}
					let temp = { name:'其他', value:0 };
					for(let i = len-1; i < data.length; ++i){
						temp.value += data[i].value;
					}
					ret.push(temp);
					
					return ret;
				}
			},
			drawArcbar(id, width, percent, color, title, subtitle) {
			
				let series = [{
					name: "",
					data: percent
				}];
			
				const ctx = uni.createCanvasContext(id, this);
				uChartsInstance[id] = new uCharts({
					type: "arcbar",
					context: ctx,
					width: uni.upx2px(width),
					height: uni.upx2px(width),
					series: series,
					animation: true,
					background: "#FFFFFF",
					color: [color],
					padding: undefined,
					title: {
						name: title,
						fontSize: 20,
						color: color
					},
					subtitle: {
						name: subtitle,
						fontSize: 10,
						color: "#666666"
					},
					extra: {
						arcbar: {
							type: "circle",
							width: 8,
							backgroundColor: "#E9E9E9",
							startAngle: 1.5,
							endAngle: 0.25,
							gap: 2
						}
					}
				});
			},
			drawPie(id, seriesEx) {
				let series = this.deepClone(seriesEx);
				for(let i = 0; i < series[0].data.length; ++i){
					if(series[0].data[i].value < 0) series[0].data[i].value = 0;
					if(series[0].data[i].name.length > 10) series[0].data[i].name = series[0].data[i].name.substring(0, 10);
				}
				console.log(' series[0].data.length',  series[0].data)
				
				
				const ctx = uni.createCanvasContext(id, this);
				uChartsInstance[id] = new uCharts({
					type: "pie",
					context: ctx,
					width: uni.upx2px(700),
					height: uni.upx2px(500),
					series: series,
					animation: true,
					background: "#FFFFFF",
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [5, 5, 5, 5],
					legend: {
						show: true,
						position: "right",
						lineHeight: 25
					},
					extra: {
						pie: {
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: true,
							borderWidth: 3,
							borderColor: "#FFFFFF"
						}
					}
				});
			},
			gotoTable(type){
				let tableData = {};
				
				if(type == 0){
					tableData.title = '仓库分布详情';
					tableData.tableHead = [ {width:20, name:'仓库'}, {width:20, name:'金额', sort:true}, {width:20, name:'数量', sort:true} ];
					
					tableData.datas = [];
					let datas = this.data.warehouseDistributionDetail;
					for(let i = 0; i < datas.typeAmountDetailList.length; ++i){
						let rowCells = [];
						rowCells.push({value: datas.typeAmountDetailList[i].name});
						rowCells.push({value: this.getPrice(datas.typeAmountDetailList[i].value, 'HKD', '-', 0), num: datas.typeAmountDetailList[i].value });
						let num = this.getNumValue(datas.typeNumDetailList, datas.typeAmountDetailList[i].name);
						rowCells.push({value: this.getPrice(num, '', '', 0), num: num });
						
						tableData.datas.push({cells: rowCells});
					}
				}
				else if(type == 1){
					tableData.title = '货源分布详情';
					tableData.tableHead = [ {width:20, name:'货源'}, {width:20, name:'金额', sort:true}, {width:20, name:'数量', sort:true} ];
					
					tableData.datas = [];
					let datas = this.data.deptDistributionDetail;
					for(let i = 0; i < datas.typeAmountDetailList.length; ++i){
						let rowCells = [];
						rowCells.push({value: datas.typeAmountDetailList[i].name});
						rowCells.push({value: this.getPrice(datas.typeAmountDetailList[i].value, 'HKD', '-', 0), num: datas.typeAmountDetailList[i].value });
						let num = this.getNumValue(datas.typeNumDetailList, datas.typeAmountDetailList[i].name);
						rowCells.push({value: this.getPrice(num, '', '', 0), num: num });
						
						tableData.datas.push({cells: rowCells});
					}
				}
				else if(type == 2){
					tableData.title = '采购日期详情';
					tableData.tableHead = [ {width:20, name:'采购日期', sort:true}, {width:20, name:'金额', sort:true}, {width:20, name:'数量', sort:true} ];
					
					tableData.datas = [];
					let datas = this.data.dateDistributionDetail;
					for(let i = 0; i < datas.typeAmountDetailList.length; ++i){
						let rowCells = [];
						rowCells.push({value: datas.typeAmountDetailList[i].name});
						rowCells.push({value: this.getPrice(datas.typeAmountDetailList[i].value, 'HKD', '-', 0), num: datas.typeAmountDetailList[i].value });
						let num = this.getNumValue(datas.typeNumDetailList, datas.typeAmountDetailList[i].name);
						rowCells.push({value: this.getPrice(num, '', '', 0), num: num });
						
						tableData.datas.push({cells: rowCells});
					}
				}
				else if(type == 3){
					tableData.title = '品牌分布详情';
					tableData.tableHead = [ {width:20, name:'品牌'}, {width:20, name:'金额', sort:true}, {width:20, name:'数量', sort:true} ];
					
					tableData.datas = [];
					let datas = this.data.brandDistributionDetail;
					for(let i = 0; i < datas.typeAmountDetailList.length; ++i){
						let rowCells = [];
						rowCells.push({value: datas.typeAmountDetailList[i].name});
						rowCells.push({value: this.getPrice(datas.typeAmountDetailList[i].value, 'HKD', '-', 0), num: datas.typeAmountDetailList[i].value });
						let num = this.getNumValue(datas.typeNumDetailList, datas.typeAmountDetailList[i].name);
						rowCells.push({value: this.getPrice(num, '', '', 0), num: num });
						
						tableData.datas.push({cells: rowCells});
					}
				}
				else if(type == 4){
					tableData.title = '型号分布详情';
					tableData.tableHead = [ {width:20, name:'型号'}, {width:20, name:'金额', sort:true}, {width:20, name:'数量', sort:true} ];
					
					tableData.datas = [];
					let datas = this.data.modelDistributionDetail;
					for(let i = 0; i < datas.typeAmountDetailList.length; ++i){
						let rowCells = [];
						rowCells.push({value: datas.typeAmountDetailList[i].name});
						rowCells.push({value: this.getPrice(datas.typeAmountDetailList[i].value, 'HKD', '-', 0), num: datas.typeAmountDetailList[i].value });
						let num = this.getNumValue(datas.typeNumDetailList, datas.typeAmountDetailList[i].name);
						rowCells.push({value: this.getPrice(num, '', '', 0), num: num });
						
						tableData.datas.push({cells: rowCells});
					}
				}
				
				
				getApp().globalData.pageInItem = tableData;
				uni.navigateTo({ url:'table' })
			},
			getNumValue(arr, name){
				for(let i = 0; i < arr.length; ++i){
					if(arr[i].name == name || arr[i].time == name){
						if(arr[i].value)
							return arr[i].value;
						else if(arr[i].purchaseQuantity)
							return arr[i].purchaseQuantity;
					}
				}
				return 0;
			},
			findArrValue(arr, find){
				let ret = [];
				for(let i =0; i < arr.length; ++i){
					if(arr[i].name.indexOf(find) != -1){
						ret.push(arr[i]);
					}
				}
				
				return ret;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		background-color: #f9f9f9;
		padding: 20rpx 15rpx;
		color: #4c4c4c;

		.select {
			background-color: #FFFFFF;
			padding: 20rpx;
			font-size: 30rpx;
			font-weight: bold;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.name {
				margin-right: 100rpx;
			}
			
			.item {
				background-color: #1ECC99;
				border-radius: 20rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				padding: 20rpx 25rpx;
						
			}
						
			.noneSel {
				background-color: #efefef;
				color: #999999;
			}
		}
		
		.sticky{
			position: sticky;
			z-index: 980;
		}

		.mainTitle {
			background-color: #FFFFFF;
			margin: 10rpx 20rpx 40rpx 20rpx;
			font-size: 30rpx;
			font-weight: bold;
			border-radius: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		
			.img {
				width: 10rpx;
				height: 30rpx;
				background-color: #1ECC99;
				border-radius: 5rpx;
				margin-right: 20rpx;
			}
			
			.more{
				font-size: 22rpx;
				font-weight: normal;
			}
		
		}

		.title {
			background-color: #FFFFFF;
			border-radius: 30rpx;
			padding: 30rpx 0rpx;

			.selName {
				font-size: 22rpx;
				color: #bdbdbd;
				margin-left: 20rpx;
			}

			.showValue {
				margin-top: 25rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item {
					flex: 1;

					display: flex;
					flex-direction: column;
					align-items: center;

					.price {
						font-size: 32rpx;
						font-weight: bold;
						margin-bottom: 20rpx;
					}

					.name {
						color: #666666;
						font-size: 24rpx;
					}
				}
			}


		}

		.chart {
			background-color: #FFFFFF;
			border-radius: 30rpx;
			padding: 20rpx 0rpx 40rpx;
			margin-top: 30rpx;

			.title2 {
				font-size: 28rpx;
				color: #666666;
				margin: 0rpx 20rpx;
				text-align: center;
			}

			.main2 {
				width: 700rpx;
				height: 550rpx;
			}
		}
	}
</style>
