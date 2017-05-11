## vue-mobile-ui ##
#### 面向移动端的组件 ####

支持vue版本: Vue2.x 版本

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

### 全局方法

* Vue.startRemListener(val);

	开始对rem的自动监听，接收一个小数的参数，
	1rem = 窗口宽度*val，
	val默认为0.1,在窗口大小改变时同样会对rem进行响应,
	该方法默认被使用，当然如果你不满足rem 和 窗口宽度的比例，也可以再次设置,vue-mobile-ui 部分组件基于rem 来适配移动端


### 使用组件:

#### vue-carousel

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


#### vue-refresh

  vue-refresh 是 vue-mobile-ui 中的刷新组件，目前主要提供以下刷新功能:

  * 下拉刷新
  
  使用 vue-refresh:
  
	<vue-refresh tag=""div v-on:downRefresh="callbark" >
	</vue-refresh>

  vue-refresh 存在以下接口:

  * tag 

	tag 为 vue-refresh 需要渲染的容器标签名

  * distance
  	
	distance 触发事件需要的下拉距离，默认为 160

##### 事件列表:

  * downRefresh
	
	下拉刷新事件，使用 v-on 监听事件在回调函数使用ajax来请求数据，即可实现下拉刷新

### 全局指令

  * v-scroll-load
	
	滚动加载指令，当该指令作用与一个容器时，当页面滚动到容器底部可看见时，该指令将会执行接收回调函数( 你可以在回调里进行ajax请求数据的操作 )，你也可以在刷新组件上添加该指令，让该容器同时具有下拉刷新以及滚动加载
	
	举例:
	
		<vue-refresh v-scroll-load="addData" v-on:downRefresh="loadData"  tag="div"   >
			
		</vue-refresh>	  

  > addData 函数里使用了ajax 请求数据后将数据添加到data中的数组末尾

  > loadData 函数使用ajax 请求数据后将数据直接赋值给了data中的数组
		
	 