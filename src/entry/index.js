import VueCarousel from '../../package/VueCarousel.vue';

const ComponentsList = [ VueCarousel ];
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
	ComponentsList.map((component) => {
		Vue.component(component.name, VueCarousel);
	});
	Vue.startRemListener();

}


export default VueMobileUI;