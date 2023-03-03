<template>
	<view>
		<view class="search row vCenter" :style="{ top: windowTop + 'px' }">
			<uni-search-bar style="flex: 1;" v-model="keyword" placeholder="输入关键字搜索" @confirm="search(true)"	cancelButton="none" />
			<image style="width: 50rpx; height: 50rpx; padding: 0 20rpx 0 0;" src="../static/imgs/common/filter.png" mode="aspectFit" @click="showDrawer"></image>
		</view>

		<uni-drawer ref="filter"  mode="left" :width="windowWidth*3/4" :mask-click="true">
				<view class="filter" >
					<scroll-view scroll-y class="scroll">
						<uni-collapse>
							<uni-collapse-item open title="公司" thumb="../static/imgs/common/local.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="companyId" :localdata="companyInfo" :map="collapseMap" @change="companyChange"></uni-data-checkbox>
							</uni-collapse-item>
							<uni-collapse-item v-if="stockList.length > 0" open title="库存地" thumb="../static/imgs/common/local.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="stockId" :localdata="stockList" :map="collapseMap"></uni-data-checkbox>
							</uni-collapse-item>
							<uni-collapse-item title="库存状态" thumb="../static/imgs/common/state.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="stateId" :localdata="stateList"></uni-data-checkbox>
							</uni-collapse-item>
							<uni-collapse-item v-if="brandList.length > 0" title="品牌" thumb="../static/imgs/common/brand.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="brandId" :localdata="brandList" :map="collapseMap"></uni-data-checkbox>
							</uni-collapse-item>
							<uni-collapse-item v-if="buyerList.length > 0" title="采购组" thumb="../static/imgs/common/buy.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="buyerId" :localdata="buyerList" :map="collapseMap"></uni-data-checkbox>
							</uni-collapse-item>
							<uni-collapse-item v-if="sellerList.length > 0" title="销售组" thumb="../static/imgs/common/sale.png">
								<uni-data-checkbox selectedColor="#1ECC99" style="margin: 0 80rpx;" mode="list" multiple icon="right" v-model="sellerId" :localdata="sellerList" :map="collapseMap"></uni-data-checkbox>
							</uni-collapse-item>
							
						</uni-collapse>
					</scroll-view>
					
					<view style="display: flex; justify-content: space-around;">
						<button class="btnReset" @click="ResetFilter" type="primary">重置</button>
						<button class="btnSet" @click="closeDrawer" type="primary">确认</button>
					</view>
					
				</view>
				
				
		</uni-drawer>
		
		<view v-if="list.length == 0 && curPage == 2" class="no-data" style="padding-top: 300rpx">
			<image src="../static/imgs/common/no.png" mode="aspectFill"></image>
			<text style="font-size: 28rpx">暂无商品哦~</text>
		</view>
		<view v-else class="list">
			<view v-for="(item, index) in list" :key="index" class="item row vCenter" @click="goToDetail(item.id)">
				<view class="img">
					<easy-loadimage class="img" :image-src="item.pic" :scroll-top="scrollTop"  mode="aspectFit"></easy-loadimage>
				</view>
				<view class="desc">
					<view class="brand" @longpress="setCopyData(item.model)">{{item.brand + '-' + item.model}}</view>
					<view class="line" @longpress="setCopyData(item.stockNo)">
						<text>货&emsp;号：</text> <text>{{item.stockNo}}</text>
					</view>
					<view class="line" @longpress="setCopyData(item.buyWatchSn)">
						<text>机芯号：</text> <text>{{item.buyWatchSn}}</text>
					</view>
					<view class="line">
						<text>采购时间：</text> <text>{{item.buyDate}}</text>
					</view>
					<view class="line">
						<text>库存状态：</text> <text>{{item.warehouseName}} （{{getState(item.state)}}）</text>
					</view>
				</view>
			</view>
		</view>
		<view class="nomore" v-if="haveMore == false && list.length > 0">没有更多了</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowTop:44,
				scrollTop: 0,
				windowWidth:400,
				keyword: '',
				curPage: 1,
				list:[],
				haveMore: true,
				
				companyInfo:[],
				
				collapseMap:{text:'name',value:'id'},
				
				companyId:[],
				
				stockId:[],
				stockList:[],
				
				stateId:[0, 1, 2],
				stateList:[  { value: 0, text: "采购中" }, { value: 1, text: "运输中" }, { value: 2, text: "已入库" }, { value: 3, text: "已售未出库" }, { value: 4, text: "已售已出库" }, { value: 5, text: "已寄卖" }, { value: 6, text: "客人寄卖" }],
				
				brandId:[],
				brandList:[],
				
				buyerId:[],
				buyerList:[],
				
				sellerId:[],
				sellerList:[],
				
			}
		},
		onLoad(){
			this.search(true);
			this.getFilterInfo();
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
			
			uni.getSystemInfo({
				success: (data) => {
					this.windowWidth = data.windowWidth;
				},
			});
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onPullDownRefresh(){
			this.search(true);
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			if (this.haveMore && this.list.length > 0) {
				this.search(false);
			}
		},
		methods: {
			search(rest) {
				
				if(rest){
					this.curPage = 1;
					this.haveMore = true;
					this.list = [];
				}
				
				uni.showLoading({ title: "加载中...", });
				
				let data = { keyword: this.keyword, page: this.curPage, pageNum: 10 };
				if(this.stockId.length > 0){
					data.warehouseIdList = this.stockId;
				}
				else{
					let stockId = [];
					for(let i = 0; i < this.companyInfo.length; ++i){
						if(this.companyId.indexOf(this.companyInfo[i].id) != -1){
							for(let k = 0; k < this.companyInfo[i].warehouseList.length; ++k){
								stockId.push(this.companyInfo[i].warehouseList[k].id);
							}
						}
					}
					data.warehouseIdList = stockId;
				}
					
				if(this.stateId.length > 0) data.stateList = this.stateId;
				if(this.brandId.length > 0) data.brandList = this.brandId;
				if(this.buyerId.length > 0) data.buyerIdList = this.buyerId;
				if(this.sellerId.length > 0) data.sellerIdList = this.sellerId;
				
			
				uni.request({
					url: this.$baseUrl + "/api/watch/stock/stockSearch",
					method: "POST",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					data: data,
					complete: (res) => {
						uni.hideLoading();
						if (this.checkBack(res) == false) return;
				
						let list = res.data.data.list;
						let total = res.data.data.total;
						
						for (let i = 0; i < list.length; ++i) {
							if (list[i].pics) {
								list[i].pic = this.$baseUrl + "/api/watch/stock" + list[i].pics.replace('\\', '/');
							} else {
								list[i].pic = '../static/imgs/common/nopic.jpg';
							}
							
							console.log(list[i].pic)
						}
						
						
						this.list = this.list.concat(list);
						
						++this.curPage;
						if (this.list.length >= total)
							this.haveMore = false;

						uni.hideLoading();
						
					},
				});
			},
			getFilterInfo(){
				uni.request({
					url: this.$baseUrl + "/api/watch/stock/companyWithDeptList",
					method: "GET",
					header: {
						"content-type": "application/json",
						token: uni.getStorageSync("token"),
					},
					data:{},
					complete: (res) => {
						uni.hideLoading();
						if (this.checkBack(res) == false) return;
				
						let list = res.data.data;
						this.companyInfo = [];
						
						for(let i = 0; i < list.length; ++i){
							if(list[i].name.indexOf('Test') == -1 && list[i].warehouseList.length > 0){
								let brandList = [];
								for(let k = 0; k < list[i].brandList.length; ++k){
									brandList.push({id:list[i].brandList[k], name:list[i].brandList[k]});
								}
								list[i].brandListEx = brandList;
								this.companyInfo.push(list[i]);
							}
						}
				
						uni.hideLoading();
						
					},
				});
			},
			companyChange(e){
				this.stockList = [];
				this.brandList =  [];
				this.buyerList =  [];
				this.sellerList =  [];
				
				this.stockId = [];
				this.brandId = [];
				this.buyerId = [];
				this.sellerId = [];
				
				if(e.detail.data.length > 1){
					let stockList = [];
					let brandList = [];
					for(let i = 0; i < e.detail.data.length; ++i){
						let com = e.detail.data[i];
						for(let  k = 0; k < com.warehouseList.length; ++k){
							stockList.push({id: com.warehouseList[k].id, name: com.name + ' - ' + com.warehouseList[k].name})
						}
						
						for(let  k = 0; k < com.brandList.length; ++k){
							if(brandList.indexOf(com.brandList[k]) == -1)
								brandList.push(com.brandList[k])
						}
					}
					
					
					this.stockList = stockList;
					
					brandList.sort();
					for(let k = 0; k < brandList.length; ++k){
						this.brandList.push({id:brandList[k], name:brandList[k]});
					}
					
				}
				else if(e.detail.data.length == 1){
					//选中了某一个公司
					let com = e.detail.data[0];
					
					this.stockList = com.warehouseList;
					this.brandList = com.brandListEx;
					this.buyerList = com.buyerList;
					this.sellerList = com.sellerList;
				}
			},
			getIds(arr){
				let ret = [];
				for(let i = 0; i < arr.length; ++i){
					ret.push(arr[i].id);
				}
				return ret;
			},
			showDrawer() {
				this.$refs.filter.open();
			},
			closeDrawer() {
				this.$refs.filter.close();
				this.search(true);
			},
			ResetFilter(){
				this.companyId = [];
				this.stockId = [];
				this.brandId = [];
				this.buyerId = [];
				this.sellerId = [];
				
				this.stateId = [0, 1, 2];
				
				this.stockList = [];
				this.brandList =  [];
				this.buyerList =  [];
				this.sellerList =  [];
			},
			getState(state){
				for(let i = 0; i < this.stateList.length; ++i){
					if(state == this.stateList[i].value)
						return this.stateList[i].text;
				}
				
				return '';
			},
			goToDetail(id){
				uni.navigateTo({
					url: './stockDetail?id=' + id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.uni-data-checklist::v-deep .checkobx__list{
		border-color: #1ECC99 !important;
	}
	
	.search {
		position: sticky;
		top: var(--window-top);
		z-index: 980;
		background-color: white;
	}
	
	.filter{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		background-color: white;
		
		.scroll{
			flex: 1;
			height:0;
		}
		
		.btnReset{
			margin: 20rpx 40rpx 60rpx 40rpx;
			background-color: #cccccc;
			flex: 1;
		}
		
		.btnSet{
			margin: 20rpx 40rpx 60rpx 40rpx;
			background-color: #1ECC99;
			flex: 1;
		}
	}
	
	.list{
		font-size: 26rpx;
		color: #03314B;
		margin: 20rpx;
		
		.item{
			margin-bottom: 40rpx;
			padding-bottom: 40rpx;
			border-bottom: 1rpx dashed #cccccc;
			
			.img{
				width: 180rpx;
				height: 180rpx;
				margin-right: 20rpx;
			}
			
			.desc{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				width: 0;
				
				.brand{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 26rpx;
					
				}
				
				.line{
					display: flex;
					justify-content: space-between;
					margin-top: 10rpx;
				}
			}
			
		
		}
	}
	
	.nomore{
		text-align: center;
		font-size: 22rpx;
		color: #cccccc;
	}
</style>
