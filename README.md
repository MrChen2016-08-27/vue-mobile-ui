## vue-mobileUI ##
#### 面向移动端的组件 ####

只支持 Vue2.0 版本

vue-mobile-ui 只支持 单文件组件形式（webpack+vue-loader），需要的依赖:

* [vue-touch](https://github.com/vuejs/vue-touch/tree/next)

> v-touch 是移动端的好帮手,能节省开发移动端很多事件的效率

确保项目已经正确安装 vue-touch 和 vue-touch 依赖的 hammer,请移步 [vue-touch](https://github.com/vuejs/vue-touch/tree/next) (注意: vue-touch next分支才支持vue2.0 )

如果你的项目已经在使用Vue2.0版本 和 v-touch，那相信已经正确配置好了 v-touch .

##

安装 vue-mobile-ui :

	 npm install vue-mobile-ui --save-dev

在文件入口(一般为 main.js)引入:

	import VueMobileUI from 'vue-mobile-ui';
	
使用:

	Vue.use(VueMobileUI);

再次提醒一下,请确保你的项目 vue-touch 使用正确,完整版引入:

	import Vue from 'vue';
	import App from './App.vue';
	import VueTouch from 'vue-touch';
	import VueMobileUI from 'vue-mobile-ui';
	
	Vue.use(VueTouch, {name: 'v-touch'});
	Vue.use(VueMobileUI);

### 使用组件:

在你的 App.vue 文件(当然在其他vue文件中也可以)使用 vue-carousel 组件.

示例:

	<style>
		*{
			margin: 0px;
			padding: 0px;
			box-sizing: border-box;
		}
	</style>
	
	<template>
		<div id='app'>
			<vue-carousel  :dataList='dataList' ></vue-carousel>
		</div>
	</template>
	
	<script>
		export default {
			data (){
				return {
					dataList: [
						{ src: 'http://i0.hdslb.com/bfs/archive/7d459c456f9f09d1231d2c2e8664969cd132a68b.jpg', href: 'https://www.baidu.com' },	
						{ src: 'http://i0.hdslb.com/bfs/archive/62784b539e6d00e6ec88101a6899b77f6ca9575b.jpg', href: 'https://www.baidu.com' },	
						{ src: 'http://i0.hdslb.com/bfs/archive/3b624c16e66416d2970ff6edaa152e021f124df4.jpg', href: 'https://www.baidu.com' }, 
						{ src: 'http://i0.hdslb.com/bfs/archive/8576f7674a2ab0343944d0e215b4ecd8f79783d2.jpg', href: 'https://www.baidu.com' }
					]
				}
			}
		}
	</script>

vue-carousel 组件接受三个参数:

* dataList
 
		接收一个数组(Array), 数组中存放 json 对象, json对象中:
		
		src 代表轮播图片,
		href 代表链接(可选参数,这里拿百度网址演示一下)(如果是路由地址请设置routerOpen)

* type

		接收一个字符串,   默认为 rotateY 
	
		type 存在以下的值:
		
		rotateY 以Y轴翻转的形式轮播,
		rotateX 以X轴翻转的形式轮播，
		translateX 以X轴位移来轮播,
		translateY 以Y轴位移来轮播,
		以上都带有淡入淡出效果

* routerOpen
 
		接收一个Boolean值,true则代表href中的地址使用路由(v-router)来跳转,false 则会使用a标签的方式来打开地址


 