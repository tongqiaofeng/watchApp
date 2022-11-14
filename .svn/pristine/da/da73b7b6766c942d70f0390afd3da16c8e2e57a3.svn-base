<template>
	<view class="content">
		<popwndSelect :visible.sync="bShowYear" strTitle="请选择时间" :lst="yearList" :sel="yearIdx" @confirm="yearChange"/>
			
		<view class="select">
			<view class="name" @click="bShowYear = true">{{yearList[yearIdx]}}</view>
			<view :class="['item', {'noneSel':index != curSel}]" v-for="(item, index) in selValue" :key="index" @click="selChange(index)">
				{{item}}
			</view>
		</view>
		
		<view class="chart">
			
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购概况{{ yearIdx == 1 ? '（环比）' : ''}}</view>
			</view>
			
			<view style="display: flex; justify-content: space-around;">
				<view>
					<canvas canvas-id="arcbar1" id="arcbar1" style="width: 250rpx; height: 250rpx;" />
					<view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx; text-align: center; ">{{arcbar1_value}}</view>
				</view>
				
				<view v-if="yearIdx == 1">
					<canvas canvas-id="arcbar2" id="arcbar2" style="width: 250rpx; height: 250rpx;" />
					<view style="font-size: 30rpx; font-weight: bold; margin-top: 20rpx; text-align: center; ">{{arcbar2_value}}</view>
				</view>
			</view>
		</view>
		
		
		
		<view class="chart">
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购组分布</view>
			</view>
			
			<canvas canvas-id="pie1" id="pie1" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购点分布</view>
			</view>
			
			<canvas canvas-id="pie2" id="pie2" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购品牌分布</view>
			</view>
			
			<canvas canvas-id="pie3" id="pie3" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购型号分布</view>
			</view>
			
			<canvas canvas-id="pie4" id="pie4" style="width: 700rpx; height: 500rpx;" />
		</view>
		
		<view class="chart">
			<view class="mainTitle">
				<view class="img"></view>
				<view class="name">采购金额、数量图表</view>
			</view>
			
			<view class="title">
				<view class="select" id="select1">
					<view :class="['item', {'noneSel':index != curSel1}]" v-for="(item, index) in selValue1" :key="index" @click="selChange1(index)">
						{{item}}
					</view>
				</view>
			</view>
			
			<view class="chart">
				<view class="title2">金额</view>
				<canvas canvas-id="chart1" id="chart1" class="main2" @touchstart="touchColumn($event, 'chart1')"
					@touchmove="moveColumn($event, 'chart1')" @touchend="touchEndColumn($event, 'chart1')"
					@tap="tapColumn($event, 'chart1')" />
			</view>
			
			<view class="chart">
				<view class="title2">数量</view>
				<canvas canvas-id="chart3" id="chart3" class="main2" @touchstart="touchColumn($event, 'chart3')"
					@touchmove="moveColumn($event, 'chart3')" @touchend="touchEndColumn($event, 'chart3')"
					@tap="tapColumn($event, 'chart1')" />
			</view>
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
				data:{},
				bShowYear: false,
				yearIdx: 0,
				yearList: ['2018~至今'],
				
				selValue: ['采购金额', '采购数量'],
				curSel: 0,
				
				arcbar1_value:'',
				arcbar2_value:'',
				
				
				selValue1: ['按年统计', '按季度统计', '按月统计'],
				curSel1: 0,
				
				chartData1: {
					categories: [],
					series: [{
							name: "",
							type: "column",
							color: '#7bdcca',
							data: [],
				
						}, {
							name: "",
							type: "area",
							style: "curve",
							data: [],
				
						}
					]
				},
				chartData3: {
					categories: [],
					series: [{
							name: "",
							type: "column",
							color: '#5A82F5',
							data: [],
				
						},
						{
							name: "",
							type: "area",
							style: "curve",
							data: []
						},
					]
				},
			}
		},
		onLoad(){
			this.initYear();
			
			this.getInfo();
		},
		methods: {
			initYear(){
				this.yearList = ['2018~至今'];
				for(let i = new Date().getFullYear(); i >= 2018; --i){
					this.yearList.push(i + '年');
				} 
			},
			getInfo(){
				
				uni.showLoading({
					title: "加载中...",
				});
				let selectYear = '';
				if(this.yearIdx > 0)
					selectYear = this.yearList[this.yearIdx].replace('年', '');

					
				uni.request({
					url: this.$baseUrl + "/api/watch/stock/purchaseReportDataGet",
					header: {
						'content-type': "application/json",
						token: uni.getStorageSync("token"),
					},
					data:{
						selectYear: selectYear,
					},
					success: (res) => {
						uni.hideLoading();
						this.data = res.data.data;
						
						
						this.initChart();
					},
					fail: (err) => {
						uni.hideLoading();
					},
				});
				
			},
			yearChange(e){
				this.yearIdx = e.sel;
				this.getInfo();
			},
			selChange(idx) {
				this.curSel = idx;
				this.initChart();
			},
			selChange1(idx) {
				this.curSel1 = idx;
				this.initChart();
			},
			onClickTabItem(e){
				if (this.tabCurrent != e.currentIndex) {
				    this.tabCurrent = e.currentIndex;
					if(this.tabCurrent == 0){
						
					}
				}
			},
			initChart()
			{
				//采购概况
				let arcbar1_percent = this.curSel == 0 ? this.data.overviewMsg.amountDetail.yearPercentage : this.data.overviewMsg.numDetail.yearPercentage;
				this.arcbar1_value = this.curSel == 0 ? this.data.overviewMsg.amountDetail.currentYear : this.data.overviewMsg.numDetail.currentYear;
				let arcbar2_percent = this.curSel == 0 ? this.data.overviewMsg.amountDetail.quarterPercentage : this.data.overviewMsg.numDetail.quarterPercentage;
				this.arcbar2_value = this.curSel == 0 ? this.data.overviewMsg.amountDetail.currentQuarter : this.data.overviewMsg.numDetail.currentQuarter;
				
				if(arcbar1_percent > 100) arcbar1_percent = 100;
				if(arcbar2_percent > 100) arcbar2_percent = 100;
				this.arcbar1_value = this.getPrice(this.arcbar1_value, this.curSel == 0 ? 'HKD' : '', '-', 0);
				this.arcbar2_value = this.getPrice(this.arcbar2_value, this.curSel == 0 ? 'HKD' : '', '-', 0);
				
					
				if(this.yearIdx != 1){
					this.drawArcbar("arcbar1", 250, 1, "#1890FF", this.yearList[this.yearIdx], this.selValue[this.curSel]);
				}
				else{
					this.drawArcbar("arcbar1", 250, arcbar1_percent/100, "#1890FF", arcbar1_percent + '%', '年度目标');
					this.drawArcbar("arcbar2", 250, arcbar2_percent/100, "#91CB74", arcbar2_percent + '%', '季度目标');
				}
					
				
				//采购组分布
				let pie1_Data =  this.curSel == 0 ? this.data.distributionOverviewMsg.deptDistributionDetail.typeAmountDetailList : this.data.distributionOverviewMsg.deptDistributionDetail.typeNumDetailList;
				this.drawPie("pie1", [{ data : pie1_Data }]);
				
				//采购点分布
				let pie2_Data =  this.curSel == 0 ? this.data.distributionOverviewMsg.sourceDistributionDetail.typeAmountDetailList : this.data.distributionOverviewMsg.sourceDistributionDetail.typeNumDetailList;
				this.drawPie("pie2", [{ data : pie2_Data }]);
				
				//采购品牌分布
				let pie3_Data =  this.curSel == 0 ? this.data.distributionOverviewMsg.brandDistributionDetail.typeAmountDetailList : this.data.distributionOverviewMsg.brandDistributionDetail.typeNumDetailList;
				pie3_Data = this.changeData(pie3_Data, 8);
				this.drawPie("pie3", [{ data : pie3_Data }]);
				
				//采购型号分布
				let pie4_Data =  this.curSel == 0 ? this.data.distributionOverviewMsg.modelDistributionDetail.typeAmountDetailList : this.data.distributionOverviewMsg.modelDistributionDetail.typeNumDetailList;
				pie4_Data = this.changeData(pie4_Data, 8);
				this.drawPie("pie4", [{ data : pie4_Data }]);
				
				//采购金额、数量图表
				//chart1
				let chartData1 = this.deepClone(this.chartData1);
				let chartData3 = this.deepClone(this.chartData3);
				
				let chart1_data = this.data.chartMsg.chartYearMsg.purchaseAmountList;
				if(this.curSel1 == 1) chart1_data = this.data.chartMsg.chartQuarterMsg.purchaseAmountList;
				else if(this.curSel1 == 2) chart1_data = this.data.chartMsg.chartMonthMsg.purchaseAmountList;
				
				let x = [];
				let y = [];
				for (let i = 0; i < chart1_data.length; ++i) {
					x.push(chart1_data[i].time);
					y.push(chart1_data[i].purchaseAmount);
				}
				this.chartData1.categories = x;
				this.chartData1.series[0].data = y;
				this.chartData1.series[1].data = y;
				this.chartData1.total = this.getSum(y);
				
				//chart2
				x = [];
				y = [];
				
				let chart2_data = this.data.chartMsg.chartYearMsg.purchaseQuantityList;
				if(this.curSel1 == 1) chart2_data = this.data.chartMsg.chartQuarterMsg.purchaseQuantityList;
				else if(this.curSel1 == 2) chart2_data = this.data.chartMsg.chartMonthMsg.purchaseQuantityList;
				
				for (let i = 0; i < chart2_data.length; ++i) {
					x.push(chart2_data[i].time);
					y.push(chart2_data[i].purchaseQuantity);
				}
				this.chartData3.categories = x;
				this.chartData3.series[0].data = y;
				this.chartData3.series[1].data = y;
				this.chartData3.total = this.getSum(y);
				
				this.drawChart3("chart1", this.chartData1);
				this.drawChart3("chart3", this.chartData3);
				
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
			drawPie(id, series) {
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
			drawChart3(id, data) {
				const ctx = uni.createCanvasContext(id, this);
				uChartsInstance[id] = new uCharts({
			
					categories: data.categories,
					series: data.series,
			
					type: "mix",
					context: ctx,
			
					width: uni.upx2px(700),
					height: uni.upx2px(550),
					background: "#FFFFFF",
					dataLabel: false,
					enableScroll: true,
					xAxis: {
						disableGrid: true,
						itemCount: 5,
						fontSize: 10,
						axisLineColor: '#FFFFFF',
					},
					yAxis: {
						disableGrid: true,
						data: [{
							fontSize: 10,
							axisLineColor: '#FFFFFF',
							title: "",
							min:0,
							formatter:(value,index,opts)=>{return this.getPrice(value, '', '', 0); }//如不写此方法，Y轴刻度默认保留两位小数
						}],
					},
					legend: {
						show: false,
					},
					extra: {
						column: {
							width: 20,
							linearType: "opacity",
							linearOpacity: 0.5
						},
						tooltip: {
							showBox: false,
						},
						mix: {
							column: {
								width: 20
							}
						}
					}
				});
			},
			tapColumn(e, id) {
				let chart = uChartsInstance[id];
				if (!chart) return;
			
				var index = uChartsInstance[e.target.id].getCurrentDataIndex(e);
			},
			touchColumn(e, id) {
				let chart = uChartsInstance[id];
				if (!chart) return;
				chart.scrollStart(e);
				// chart.showToolTip(e, {
				// 	format: function(item, category) {
				// 		if (typeof item.data === 'object') {
				// 			return category + ' ' + item.name + ':' + item.data.value
				// 		} else {
				// 			return category + ' ' + item.name + ':' + item.data
				// 		}
				// 	}
				// });
				// chart.touchLegend(e)
				// {
				// }
			},
			moveColumn(e, id) {
				let chart = uChartsInstance[id];
				if (!chart) return;
				chart.scroll(e);
			},
			touchEndColumn(e, id) {
				let chart = uChartsInstance[id];
				if (!chart) return;
				chart.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				// chart.showToolTip(e, {
				// 	format: function (item, category) {
				// 		return category + ' ' + item.name + ':' + item.data 
				// 	}
				// });
			},
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
				background-color: #85dbd0;
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

		.mainTitle {
			background-color: #FFFFFF;
			margin: 10rpx 0 40rpx 20rpx;
			font-size: 30rpx;
			font-weight: bold;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
		
			.img {
				width: 10rpx;
				height: 30rpx;
				background-color: #85dbd0;
				border-radius: 5rpx;
				margin-right: 20rpx;
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
