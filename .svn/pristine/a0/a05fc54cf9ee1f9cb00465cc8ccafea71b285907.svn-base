

## actionSheet 动作面板
> **组件名：action-sheet**
> 代码块： `actionSheet`
> 关联组件：`uni-transition`
> [uni-transition](https://uniapp.dcloud.io/component/uniui/uni-transition.html)


底部弹起的模态面板，包含与当前情境相关的多个选项。

```html
<action-sheet ref="actionSheet" :actions='actions' cancel-text="取消" description="这是一段描述信息" @open="open" @close="close"></action-sheet>
```
```js
import actionSheet from '@/components/uni-action-sheet/index.vue'
export default {
	components: {
		actionSheet
	},
	data() {
		return {
			actions: [{
					name: '选项一',
					color: 'red'
				},
				{
					name: '选项二',
					disabled: true
				},
				{
					name: '选项三',
					subname: '二级标题'
				}
			]
		}
	},
	methods: {
		open() {
			console.log('动作面板打开');
		},
		close() {
			console.log('动作面板关闭');
		}
	}
}
```

## 打开面板
```js
this.$refs.actionSheet.open()
```

## 关闭面板
```js
this.$refs.actionSheet.close()
```

## Props

|参数					|说明					|类型		|默认值	|
|-						|-						|-			|-		|
|z-index				|面板层级				|Number		|2022	|
|actions				|面板选项列表			|Action[]	|[]		|
|title					|顶部标题				|string		|-		|
|cancel-text			|取消按钮文字			|string		|-		|
|description			|选项上方的描述信息		|string		|-		|
|round					|是否显示圆角			|boolean	|true	|
|overlay				|是否显示遮罩层			|boolean	|true	|
|safe-area-inset-bottom	|是否开启底部安全区适配	|boolean	|true	|
|close-on-click-action	|是否在点击选项后关闭	|boolean	|true	|
|close-on-click-overlay	|是否在点击遮罩层后关闭	|boolean	|true	|

## Action 数据结构
actions 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值

|键名		|说明			|类型	|
|-			|-				|-		|
|name		|标题			|string	|
|subname	|二级标题		|string	|
|color		|选项文字颜色	|string	|
|disabled	|是否为禁用状态	|boolean|

## Events

|事件名			|说明										|回调参数						|
|-				|-											|-								|
|select			|点击选项时触发，禁用或加载状态下不会触发	|action: Action, index: number	|
|cancel			|点击取消按钮时触发							|-								|
|open			|打开面板时触发								|-								|
|close			|关闭面板时触发								|-								|
|click-overlay	|点击遮罩层时触发							|-								|