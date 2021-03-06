/******/ module.exports = (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  "data-v-a8ae54f0",
  /* cssModules */
  null
)
Component.options.__file = "E:\\github-project\\vue-mobile-ui\\package\\VueCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8ae54f0", Component.options)
  } else {
    hotAPI.reload("data-v-a8ae54f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\github-project\\vue-mobile-ui\\package\\VueRefresh.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueRefresh.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c67073a", Component.options)
  } else {
    hotAPI.reload("data-v-0c67073a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	name: 'VueCarousel',
	data: function data() {
		return {
			active: 0
		};
	},

	props: {
		dataList: Array,
		type: {
			type: String,
			default: 'rotateY'
		},
		routerOpen: {
			type: Boolean,
			default: false
		}
	},
	created: function created() {
		this.timeCarousel();
	},
	methods: {
		addActive: function addActive() {
			if (this.active < this.dataList.length - 1) {
				this.active += 1;
			} else {
				this.active = 0;
			}
		},
		reduceActive: function reduceActive() {
			if (this.active > 0) {
				this.active -= 1;
			} else {
				this.active = this.dataList.length - 1;
			}
		},
		setActive: function setActive(value) {
			this.active = value;
		},
		timeCarousel: function timeCarousel() {
			var _this = this;

			var timer = setInterval(function () {
				_this.addActive();
			}, 4000);
		},
		routerLink: function routerLink(value) {
			if (value) {
				if (this.routerOpen) {
					this.$router.push(value);
				} else {
					window.location.href = value;
				}
			}
		}
	},
	directives: {
		'carousel': function carousel(el) {
			var oImg = el.querySelector('.img-active');
			var loadSize = function loadSize() {
				oImg = el.querySelector('.img-active');
				el.style.height = oImg.offsetHeight + 'px';
			};
			loadSize();
			//避免初始化前获取了图片高度为0
			var timer = setInterval(function () {
				if (el.offsetHeight <= 0) {
					loadSize();
				} else {
					clearInterval(timer);
				}
			}, 200);
			//当容器大小改变则重新计算
			window.addEventListener('resize', function () {
				loadSize();
			});
		}
	}

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//

exports.default = {
	name: 'VueRefresh',
	data: function data() {
		return {};
	},

	props: {
		tag: {
			type: String
		},
		/*触发需要的距离*/
		distance: {
			type: Number,
			default: 160
		}
	},
	methods: {
		downRefresh: function downRefresh(ev) {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop <= 0) {
				this.$emit('downRefresh');
			}
		}
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VueCarousel = __webpack_require__(1);

var _VueCarousel2 = _interopRequireDefault(_VueCarousel);

var _VueRefresh = __webpack_require__(2);

var _VueRefresh2 = _interopRequireDefault(_VueRefresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsList = [_VueCarousel2.default, _VueRefresh2.default];
var VueMobileUI = {};
VueMobileUI.install = function (Vue, options) {

	//开启监听在初始化和窗口大小变化时响应rem单位的变化
	Vue.startRemListener = function () {
		var multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;

		function _init() {
			var pageWidth = parseInt(document.body.clientWidth);
			var oHtml = document.querySelector('html');
			oHtml.style.fontSize = pageWidth * multiple + 'px';
		}
		window.addEventListener('resize', function () {
			_init();
		});
		_init();
	};

	//全局指令
	Vue.directive('scroll-load', {
		bind: function bind(el, binding) {
			var callback = binding.value;
			window.addEventListener('scroll', function () {
				var objTop = el.offsetTop;
				var objHeight = el.offsetHeight;
				var bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var distance = objTop + objHeight - parseInt(bodyHeight);
				if (distance > 0 && scrollTop >= distance && typeof callback === 'function') {
					callback();
				}
			});
		}
	});

	//全局组件
	ComponentsList.map(function (component) {
		Vue.component(component.name, component);
	});
	Vue.startRemListener();
};

exports.default = VueMobileUI;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n.carouse[data-v-a8ae54f0] {\n  width: 100%;\n  position: relative;\n}\n.carouse .img-list[data-v-a8ae54f0] {\n  width: 100%;\n  position: relative;\n}\n.carouse .img-list img[data-v-a8ae54f0] {\n  position: absolute;\n  width: 100%;\n}\n.carouse .rotateY-enter-active[data-v-a8ae54f0],\n.carouse .rotateY-leave-active[data-v-a8ae54f0],\n.carouse .rotateX-enter-active[data-v-a8ae54f0],\n.carouse .rotateX-leave-active[data-v-a8ae54f0],\n.carouse .translateX-enter-active[data-v-a8ae54f0],\n.carouse .translateX-leave-active[data-v-a8ae54f0],\n.carouse .translateY-enter-active[data-v-a8ae54f0],\n.carouse .translateY-leave-active[data-v-a8ae54f0] {\n  transition: all 0.7s;\n}\n.carouse .rotateY-enter[data-v-a8ae54f0],\n.carouse .rotateY-leave-active[data-v-a8ae54f0],\n.carouse .rotateX-enter[data-v-a8ae54f0],\n.carouse .rotateX-leave-active[data-v-a8ae54f0],\n.carouse .translateX-enter[data-v-a8ae54f0],\n.carouse .translateX-leave-active[data-v-a8ae54f0],\n.carouse .translateY-enter[data-v-a8ae54f0],\n.carouse .translateY-leave-active[data-v-a8ae54f0] {\n  opacity: 0;\n}\n.carouse .rotateY-enter[data-v-a8ae54f0],\n.carouse .rotateY-leave-active[data-v-a8ae54f0] {\n  transform: rotateY(180deg);\n}\n.carouse .rotateX-enter[data-v-a8ae54f0],\n.carouse .rotateX-leave-active[data-v-a8ae54f0] {\n  transform: rotateX(180deg);\n}\n.carouse translateX-enter[data-v-a8ae54f0],\n.carouse .translateX-leave-active[data-v-a8ae54f0] {\n  transform: translateX(30px);\n}\n.carouse translateY-enter[data-v-a8ae54f0],\n.carouse .translateY-leave-active[data-v-a8ae54f0] {\n  transform: translateY(30px);\n}\n.carouse ul[data-v-a8ae54f0] {\n  width: 100%;\n  position: absolute;\n  list-style: none;\n  bottom: 0.2rem;\n  z-index: 9;\n  text-align: center;\n}\n.carouse ul li[data-v-a8ae54f0] {\n  width: 3%;\n  height: 0.3rem;\n  border-radius: 0.5rem;\n  background-color: #999999;\n  position: relative;\n  margin: 0px 2%;\n  display: inline-block;\n}\n.carouse ul .active[data-v-a8ae54f0] {\n  background-color: #63B8FF;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-touch', {
    attrs: {
      "options": {
        touchAction: 'auto'
      },
      "pan-options": {
        direction: 'down',
        threshold: _vm.distance
      },
      "tag": _vm.tag
    },
    on: {
      "panend": _vm.downRefresh
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c67073a", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "carousel",
      rawName: "v-carousel"
    }],
    staticClass: "carouse"
  }, [_c('v-touch', {
    staticClass: "img-list",
    on: {
      "swipeleft": _vm.addActive,
      "swiperight": _vm.reduceActive
    }
  }, [_c('transition-group', {
    attrs: {
      "name": _vm.type
    }
  }, _vm._l((_vm.dataList), function(img, index) {
    return _c('v-touch', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.active === index),
        expression: "active === index"
      }],
      key: index,
      class: [_vm.active === index ? 'img-active' : ''],
      attrs: {
        "tag": "img",
        "src": img.src
      },
      on: {
        "tap": function($event) {
          _vm.routerLink(img.href)
        }
      }
    })
  }))], 1), _vm._v(" "), _c('ul', _vm._l((_vm.dataList), function(i, index) {
    return _c('v-touch', {
      key: index,
      class: [index === _vm.active ? 'active' : ''],
      attrs: {
        "tag": "li"
      },
      on: {
        "tap": function($event) {
          _vm.setActive(index)
        }
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a8ae54f0", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("b03521d8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8ae54f0\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueCarousel.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8ae54f0\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueCarousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);