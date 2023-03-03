import Vue from 'vue'
import App from './App'

import Chat from "@/static/js/chat.js";

Vue.config.productionTip = false

// Vue.prototype.$baseUrl = 'http://hexx.natapp1.cc';
// Vue.prototype.$baseFileUrl = 'https://hk.wistechx.cn/WatchExApi/api/watch/stock';
// Vue.prototype.$chatServerUrl = 'wss://cn.api.wistechx.cn:8099/chat';

// Vue.prototype.$baseUrl = 'http://192.168.0.164';
// Vue.prototype.$baseFileUrl = 'http://192.168.0.164/api/watch/stock';
// Vue.prototype.$chatServerUrl = 'wss://cn.api.wistechx.cn:8099/chat';

Vue.prototype.$baseUrl = 'https://hk.wistechx.cn/WatchExApi';
Vue.prototype.$baseFileUrl = 'https://hk.wistechx.cn/WatchExApi/api/watch/stock';
Vue.prototype.$chatServerUrl = 'wss://cn.api.wistechx.cn:8099/chat';

Vue.prototype.checkBack = function(ret, bShwoTip = 1) {
	let code = ret.statusCode;
	if (ret.data.code) {
		code = ret.data.code;
	}
	if (code == 200) {
		return true;
	}
	if (bShwoTip == 1) {

		if (code == 400)
			uni.showToast({
				icon: 'none',
				title: ret.data.status,
				duration: 2000
			});
		else if (code == 300)
			uni.showToast({
				icon: 'none',
				title: '请登录后再操作',
				duration: 2000
			});
		else
			uni.showToast({
				icon: 'none',
				title: "操作失败，请重试",
				duration: 2000
			});
	}

	return false;
}

Vue.prototype.$onLaunched = new Promise(resolve => {
	Vue.prototype.$isResolve = resolve;
})

Vue.prototype.checkLogin = function() {
	console.log('要去登录')
	if (uni.getStorageSync('token').length == 0) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		})
		uni.switchTab({
			url: '/comm/mine'
		})
		return true
	} else {
		return false
	}
}

Vue.prototype.setUserInfo = function(ret) {
	console.log('用户信息')
	//console.log(ret);
	if (ret.data.id == null)
		return;

	let userInfo = {};
	userInfo.userId = ret.data.id.toString();
	userInfo.userName = ret.data.username;
	userInfo.userRole = ret.data.role;
	userInfo.userToken = ret.data.token;
	userInfo.userNick = ret.data.nick;
	userInfo.userHeadPic = ret.data.headPic;
	userInfo.phoneNumber = ret.data.mailbox;
	userInfo.inviteCode = ret.data.inviteCode;
	userInfo.superiorInviteCode = ret.data.superiorInviteCode;

	//console.log(userInfo);

	getApp().globalData.userInfo = userInfo;
	uni.setStorageSync('userId', userInfo.userId);
	uni.setStorageSync('userName', userInfo.userName);
	uni.setStorageSync("token", userInfo.userToken);
	uni.setStorageSync("role", userInfo.userRole);
	uni.setStorageSync("nick", userInfo.userNick);
	uni.setStorageSync("headPic", userInfo.userHeadPic);
	uni.setStorageSync("phoneNumber", userInfo.phoneNumber);
	uni.setStorageSync("inviteCode", userInfo.inviteCode)
	uni.setStorageSync("superiorInviteCode", userInfo.superiorInviteCode);

	//WebSocket
	if (getApp().globalData.g_chat == null) {
		getApp().globalData.g_chat = new Chat(this.$chatServerUrl, "TopTime", "pages/chatList", "chat/chat", 2);
	}


	getApp().globalData.g_chat.setUserInfo(userInfo.userId, userInfo.userToken, userInfo.userNick, userInfo
		.userHeadPic);
}

//创建临时聊天
Vue.prototype.createTempChat = function() {
	if (getApp().globalData.g_chat == null) {
		getApp().globalData.g_chat = new Chat(this.$chatServerUrl, "TopTime", "pages/chatList", "chat/chat", 2);
	}
	let uuid = 'tempChat_' + this.getClientUUID();

	let userName = '神秘人士' + uuid.substring(uuid.length - 4);

	setTimeout(() => {
		getApp().globalData.g_chat.setUserInfo(uuid, uuid, userName, '');
	}, 2000);
}

// 千分价格
Vue.prototype.formatNumberRgx = function(num) {
	if (num == "" || num == null || num == 0) {
		return 0;
	} else {
		let parts = num.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
}

Vue.prototype.getPrice = function(num, currency, noPrice, fixNum) {
	if (noPrice == undefined)
		noPrice = '--';
	if (num == null || num == "null" || num == "" || num == 0)
		return noPrice;

	num = String(num);
	if (fixNum == undefined)
		fixNum = 2;

	var parts = num.toString().split(".");
	if (parts.length == 2) {
		if (fixNum == 0) {
			parts.splice(1, 1);
		} else if (parts[1].length > fixNum) {
			parts[1] = parts[1].substring(0, fixNum);
		}
	}
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return currency + ' ' + parts.join(".");
};

// 利润
Vue.prototype.costPrice = function(num1, num2) {
	let sq1, sq2, multiple;
	try {
		sq1 = num1.toString().split(".")[1].length;
	} catch (e) {
		sq1 = 0;
	}
	try {
		sq2 = num2.toString().split(".")[1].length;
	} catch (e) {
		sq2 = 0;
	}
	multiple = Math.pow(10, Math.max(sq1, sq2) + 1);
	return (num1 * multiple - num2 * multiple) / multiple;
}

Vue.prototype.getNoRepeatArry = function(arr) {
	let s1 = new Set(arr);
	return Array.from(s1);

}

Vue.prototype.deepClone = function(obj) {
	let _obj = JSON.stringify(obj),
		objClone = JSON.parse(_obj);
	return objClone
}

//判断浏览器是否是微信浏览器
//微信浏览器中打开H5隐藏顶部导航方法
Vue.prototype.hidePageNavInWechatBrowser = () => {
	//#ifdef H5
	if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ==
		"micromessenger") {
		let pageNav = document.getElementsByTagName("uni-page-head");
		if (pageNav && pageNav[0]) {
			pageNav[0].style.display = "none";
		};
		return true
	}
	//#endif
	return false;
};

Vue.prototype.getClientUUID = () => {
	let uuid = uni.getStorageSync('TopTime_UUID');
	if (uuid.length != 32) {
		var s = [];
		var hexDigits = "0123456789abcdefABCDEFJKLMNXYZOP";
		for (var i = 0; i < 32; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 32), 1);
		}
		uuid = s.join("");
		uni.setStorageSync('TopTime_UUID', uuid);
	}
	return uuid;
};

Vue.prototype.getSum = function(arr) {
	let ret = 0;
	for (let i = 0; i < arr.length; ++i) {
		ret += arr[i];
	}
	return ret;
}

Vue.prototype.setCopyData = function(text) {
		uni.setClipboardData({
			data: text, //要被复制的内容
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


	App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
