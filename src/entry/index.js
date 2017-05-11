import VueCarousel from '../../package/VueCarousel.vue';
import VueRefresh from '../../package/VueRefresh.vue';

const ComponentsList = [ VueCarousel, VueRefresh ];
var VueMobileUI = {};
VueMobileUI.install = function(Vue, options){

	//开启监听在初始化和窗口大小变化时响应rem单位的变化
	Vue.startRemListener = function(multiple = 0.1){
		function _init(){
			let pageWidth = parseInt(document.body.clientWidth);
			let oHtml = document.querySelector('html');
			oHtml.style.fontSize = pageWidth * multiple + 'px';
		}
		window.addEventListener('resize', function(){
			_init();
		});
		_init();
	};

	//全局指令
	Vue.directive('scroll-load', {
		bind: function(el, binding){
			let callback = binding.value;
			window.addEventListener('scroll', () => {
				let objTop = el.offsetTop;
				let objHeight = el.offsetHeight;
				let bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				let distance = (objTop + objHeight) - parseInt(bodyHeight);
				if(scrollTop >= distance && typeof(callback) === 'function'){
					callback();
				}
			});
		}
	});

	//全局组件
	ComponentsList.map((component) => {
		Vue.component(component.name, component);
	});
	Vue.startRemListener();

}


export default VueMobileUI;