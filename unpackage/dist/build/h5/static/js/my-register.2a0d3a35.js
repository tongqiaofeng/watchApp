(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-register"],{2893:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uniForms:i("5559").default,uniFormsItem:i("0420").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"register-container"},[i("v-uni-view",{staticClass:"upload-img",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadClick.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:e.avatarImg,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"upload-font"},[e._v("点击上传头像")])],1),i("v-uni-view",{staticClass:"register-container-main"},[i("uni-forms",{ref:"registerForm",attrs:{modelValue:e.registerData,rules:e.registerRules}},[i("uni-forms-item",{attrs:{name:"username"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:1==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("用户名*")]),i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请输入用户名","placeholder-style":"color: #dadada;",type:"text"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.nickFocus.apply(void 0,arguments)}},model:{value:e.registerData.username,callback:function(t){e.$set(e.registerData,"username",t)},expression:"registerData.username"}}),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:1==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1),i("uni-forms-item",{attrs:{name:"mailBox"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:2==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("邮箱")]),i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请输入邮箱","placeholder-style":"color: #dadada;",type:"text"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.phoneFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.emailBlur.apply(void 0,arguments)}},model:{value:e.registerData.mailBox,callback:function(t){e.$set(e.registerData,"mailBox",t)},expression:"registerData.mailBox"}}),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:2==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1),i("uni-forms-item",{attrs:{name:"code"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:3==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("验证码")]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请输入验证码","placeholder-style":"color: #dadada;",type:"text"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.codeFocus.apply(void 0,arguments)}},model:{value:e.registerData.code,callback:function(t){e.$set(e.registerData,"code",t)},expression:"registerData.code"}}),i("v-uni-button",{staticClass:"phone-num",class:{codeGeting:e.isGeting},staticStyle:{border:"none",padding:"0"},attrs:{type:"text",plain:!0,size:"mini",disabled:e.disable},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[i("v-uni-text",{staticStyle:{margin:"0 10px",color:"#c3c3c3"}},[e._v("|")]),e._v(e._s(e.time))],1)],1),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:3==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1),i("uni-forms-item",{attrs:{name:"password"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:4==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("密码*")]),i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请输入6-14位密码","placeholder-style":"color: #dadada;",type:"password"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.pswFocus.apply(void 0,arguments)}},model:{value:e.registerData.password,callback:function(t){e.$set(e.registerData,"password",t)},expression:"registerData.password"}}),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:4==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1),i("uni-forms-item",{attrs:{name:"passwordEnd"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:5==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("再次输入密码*")]),i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请确认密码","placeholder-style":"color: #dadada;",type:"password"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.pswEndFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.endPswSure.apply(void 0,arguments)}},model:{value:e.registerData.passwordEnd,callback:function(t){e.$set(e.registerData,"passwordEnd",t)},expression:"registerData.passwordEnd"}}),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:5==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1),i("uni-forms-item",{attrs:{name:"inviteCode"}},[i("v-uni-view",{staticClass:"register-every"},[i("v-uni-text",{staticClass:"every-font",style:{color:6==e.plurSelect?"#03314b":"#c3c3c3"}},[e._v("邀请码")]),i("v-uni-input",{staticClass:"every-input",attrs:{placeholder:"请输入邀请码","placeholder-style":"color: #dadada;",type:"text"},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.invitationCodeFocus.apply(void 0,arguments)}},model:{value:e.registerData.inviteCode,callback:function(t){e.$set(e.registerData,"inviteCode",t)},expression:"registerData.inviteCode"}}),i("v-uni-view",{staticClass:"every-line",style:{backgroundColor:6==e.plurSelect?"#03314b":"#ebebeb"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"register-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.userRegister.apply(void 0,arguments)}}},[e._v("注册")])],1)},s=[]},4794:function(e,t,i){"use strict";i.r(t);var a=i("2893"),r=i("acb6");for(var s in r)"default"!==s&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("b164");var n,o=i("f0c5"),l=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"674563a0",null,!1,a["a"],n);t["default"]=l.exports},"9d42":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.register-container[data-v-674563a0]{padding:0 %?60?% %?40?%}.register-container .upload-img[data-v-674563a0]{margin-top:%?100?%;text-align:center}.register-container .upload-img .avatar[data-v-674563a0]{width:%?152?%;height:%?152?%;border-radius:50%}.register-container .upload-img .upload-font[data-v-674563a0]{margin-top:%?20?%;font-size:%?26?%}.register-container .register-container-main[data-v-674563a0]{margin-top:%?96?%}.register-container .register-container-main .register-every .every-font[data-v-674563a0]{font-size:%?26?%}.register-container .register-container-main .register-every .every-input[data-v-674563a0]{margin-top:%?16?%;font-size:%?26?%;color:#000}.register-container .register-container-main .register-every .phone-num[data-v-674563a0]{color:#000;font-size:%?26?%}.register-container .register-container-main .register-every .codeGeting[data-v-674563a0]{color:#c3c3c3}.register-container .register-container-main .register-every .every-line[data-v-674563a0]{width:100%;height:%?2?%;margin:%?20?% 0 0}.register-container .register-button[data-v-674563a0]{width:%?630?%;height:%?80?%;margin:0 auto;margin-top:%?89?%;line-height:%?80?%;cursor:pointer;background-color:#1ecc99;color:#fff;font-size:%?26?%;border-radius:%?60?%;text-align:center}',""]),e.exports=t},a52b:function(e,t,i){"use strict";i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{imgUrl:"",avatarImg:i("cc8c"),plurSelect:0,registerData:{headPic:"",username:"",mailBox:"",code:"",password:"",passwordEnd:"",inviteCode:""},registerRules:{username:{rules:[{required:!0,errorMessage:"请输入用户名",trigger:"blur"}]},mailBox:{rules:[{required:!1,errorMessage:"请输入正确的邮箱地址",trigger:"blur",format:"email"}]},code:{rules:[{required:!1,errorMessage:"请输入验证码",trigger:"blur"}]},password:{rules:[{required:!0,errorMessage:"请输入6-14位密码",trigger:"blur"},{minLength:6,maxLength:14,errorMessage:"密码长度在 6 到 14 个字符"}]},passwordEnd:{rules:[{required:!0,errorMessage:"请确认密码",trigger:"blur"}]}},time:"获取验证码",count:59,isGeting:!1,disable:!1,countDown:null}},onLoad:function(){uni.getStorageSync("superiorInviteCode")&&(this.registerData.inviteCode=uni.getStorageSync("superiorInviteCode"))},methods:{emailBlur:function(){""!=this.registerData.mailBox?this.registerRules.code.rules[0].required=!0:this.registerRules.code.rules[0].required=!1,console.log(this.registerRules.code.rules[0].required)},endPswSure:function(){this.registerData.password&&this.registerData.passwordEnd&&this.registerData.password!==this.registerData.passwordEnd&&uni.showToast({icon:"none",title:"再次输入密码错误，请确认"})},uploadClick:function(){var e=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log("成功",t);var i=t.tempFilePaths;e.avatarImg=i[0],uni.uploadFile({url:e.$baseFileUrl+"/upload",fileType:"image",filePath:i[0],name:"upload-images",success:function(t){console.log(t),e.registerData.headPic=t.data.split("|")[0],uni.showToast({title:"头像上传成功",icon:"none"})},fail:function(e){console.log(e),uni.showToast({title:"头像上传失败"})}})},fail:function(e){console.log(e)}})},userRegister:function(){var e=this;console.log(this.registerData),this.$refs.registerForm.validate().then((function(t){console.log("表单数据",t),uni.showLoading({title:"注册中......"}),uni.request({method:"POST",url:e.$baseUrl+"/newWatch/api/register",header:{"content-type":"application/json"},data:e.registerData,complete:function(e){console.log("注册啦"),console.log(e),uni.hideLoading(),200==e.statusCode?uni.navigateTo({url:"../common/login"}):uni.showToast({icon:"none",title:e.data.status})}})})).catch((function(e){console.log("表单错误",e)}))},getCode:function(){var e=this;""==this.registerData.mailBox?uni.showToast({title:"请输入邮箱",icon:"none"}):(uni.showLoading({title:"验证码获取中..."}),uni.request({method:"GET",url:this.$baseUrl+"/wechat/api/smsCodeGet",header:{"content-type":"application/json"},data:{phoneNumber:this.registerData.mailBox,type:"2"},complete:function(t){uni.hideLoading(),200==t.statusCode&&(e.countDown=setInterval((function(){e.count<1?(e.isGeting=!1,e.disable=!1,e.time="获取验证码",e.count=59,console.log(e.time),clearInterval(e.countDown),e.countDown=null):(e.isGeting=!0,e.disable=!0,e.time=e.count--+"s后可重发")}),1e3)),0!=e.checkBack(t,!0)&&e.$isResolve()}}))},nickFocus:function(){this.plurSelect=1},phoneFocus:function(){this.plurSelect=2},codeFocus:function(){this.plurSelect=3},pswFocus:function(){this.plurSelect=4},pswEndFocus:function(){this.plurSelect=5},invitationCodeFocus:function(){this.plurSelect=6}}};t.default=a},acb6:function(e,t,i){"use strict";i.r(t);var a=i("a52b"),r=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},b164:function(e,t,i){"use strict";var a=i("f029"),r=i.n(a);r.a},cc8c:function(e,t){e.exports="data:image/png;base64,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"},f029:function(e,t,i){var a=i("9d42");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("2b8cda3f",a,!0,{sourceMap:!1,shadowMode:!1})}}]);