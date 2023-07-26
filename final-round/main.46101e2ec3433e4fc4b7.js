/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ \"./sass/styles.scss\");\n\n\nvar btnBurger = document.getElementById('show');\nvar burger = document.querySelector('.burger');\nvar exit = document.getElementById('exit');\nbtnBurger.addEventListener('click', function () {\n  burger.classList.remove('burger');\n  burger.classList.add('burger__active');\n});\nexit.addEventListener('click', function () {\n  burger.classList.remove('burger__active');\n  burger.classList.add('burger');\n});\nvar btnCallBack = document.getElementById('showCallback');\nvar btnCallBacks = document.getElementById('showsCallback');\nvar callback = document.querySelector('.callback');\nvar closedCallback = document.getElementById('closedCallback');\nbtnCallBack.addEventListener('click', function () {\n  callback.classList.remove('callback');\n  callback.classList.add('callback__active');\n});\nbtnCallBacks.addEventListener('click', function () {\n  callback.classList.remove('callback');\n  callback.classList.add('callback__active');\n});\nclosedCallback.addEventListener('click', function () {\n  callback.classList.remove('callback__active');\n  callback.classList.add('callback');\n});\nvar btnCall = document.getElementById('callShow');\nvar btnCalls = document.getElementById('callShows');\nvar call = document.querySelector('.call');\nvar closedCall = document.getElementById('callClosed');\nbtnCall.addEventListener('click', function () {\n  call.classList.remove('call');\n  call.classList.add('call__active');\n});\nbtnCalls.addEventListener('click', function () {\n  call.classList.remove('call');\n  call.classList.add('call__active');\n});\nclosedCall.addEventListener('click', function () {\n  call.classList.remove('call__active');\n  call.classList.add('call');\n});\n\n// Получаем ссылки на элементы радио и меток\nvar option1 = document.getElementById(\"ru\");\nvar option2 = document.getElementById(\"en\");\nvar option3 = document.getElementById(\"ch\");\nvar label1 = document.getElementById(\"label1\");\nvar label2 = document.getElementById(\"label2\");\nvar label3 = document.getElementById(\"label3\");\n\n// Добавляем обработчики событий для изменения текста метки\noption1.addEventListener(\"change\", function () {\n  if (option1.checked) {\n    label1.textContent = \"RU\";\n    label2.textContent = \"en\";\n    label3.textContent = \"ch\";\n  }\n});\noption2.addEventListener(\"change\", function () {\n  if (option2.checked) {\n    label1.textContent = \"ru\";\n    label2.textContent = \"EN\";\n    label3.textContent = \"ch\";\n  }\n});\noption3.addEventListener(\"change\", function () {\n  if (option3.checked) {\n    label1.textContent = \"ru\";\n    label2.textContent = \"en\";\n    label3.textContent = \"CH\";\n  }\n});\nvar servicesListShow = document.getElementById('list_show');\nvar servicesListClose = document.getElementById('list_close');\nvar servicesListCards = document.querySelectorAll('.services__list_card');\nvar servicesCardsList = document.querySelectorAll('.services__cards-item');\nvar servicesCardsShow = document.getElementById('cards_show');\nvar servicesCardsClose = document.getElementById('cards_close');\nvar showButton = document.querySelector('.show-button');\nvar hideButton = document.querySelector('.hide-button');\nvar showButton2 = document.querySelector('.show-button2');\nvar hideButton2 = document.querySelector('.hide-button2');\nvar cardsToShow = servicesListCards.length; // Изначально отображаем все элементы\nvar cardsToShow2 = servicesCardsList.length; // Изначально отображаем все элементы\n\n// Функция для отображения определенного количества элементов\nfunction displayCards() {\n  servicesListCards.forEach(function (card, index) {\n    if (index < cardsToShow) {\n      card.style.display = 'flex'; // Отображаем элемент\n    } else {\n      card.style.display = 'none'; // Скрываем элемент\n    }\n  });\n}\n\n// Функция для отображения определенного количества элементов\nfunction displayCards2() {\n  servicesCardsList.forEach(function (card, index) {\n    if (index < cardsToShow2) {\n      card.style.display = 'flex'; // Отображаем элемент\n    } else {\n      card.style.display = 'none'; // Скрываем элемент\n    }\n  });\n}\n\n// Функция для отображения всех элементов\nservicesListShow.addEventListener('click', function showAllCards() {\n  cardsToShow = servicesListCards.length; // Показываем все элементы\n  displayCards();\n  showButton.style.display = 'none'; // Скрываем кнопку \"Показать все\"\n  hideButton.style.display = 'block'; // Показываем кнопку \"Скрыть\"\n});\n\n// Функция для отображения всех элементов\nservicesCardsShow.addEventListener('click', function showAllCards2() {\n  cardsToShow2 = servicesCardsList.length; // Показываем все элементы\n  displayCards2();\n  showButton2.style.display = 'none'; // Скрываем кнопку \"Показать все\"\n  hideButton2.style.display = 'block'; // Показываем кнопку \"Скрыть\"\n});\n\nservicesListClose.addEventListener('click', function closedList() {\n  if (window.matchMedia('(min-width: 768px)').matches) {\n    cardsToShow = 6; // Отображаем только 6 элементов по умолчанию\n  }\n\n  if (window.matchMedia('(min-width: 1120px)').matches) {\n    cardsToShow = 8; // Отображаем только 8 элементов по умолчанию\n  }\n\n  displayCards();\n  showButton.style.display = 'block'; // Показываем кнопку \"Показать все\"\n  hideButton.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n});\n\nservicesCardsClose.addEventListener('click', function closedCards() {\n  if (window.matchMedia('(min-width: 768px)').matches) {\n    cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию\n  }\n\n  if (window.matchMedia('(min-width: 1120px)').matches) {\n    cardsToShow2 = 4; // Отображаем только 8 элементов по умолчанию\n  }\n\n  displayCards2();\n  showButton2.style.display = 'block'; // Показываем кнопку \"Показать все\"\n  hideButton2.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n});\n\n// Функция для скрытия лишних элементов\nfunction hideExtraCards() {\n  if (window.matchMedia('(min-width: 768px)').matches) {\n    cardsToShow = 6; // Отображаем только 6 элементов по умолчанию\n  }\n\n  if (window.matchMedia('(min-width: 1120px)').matches) {\n    cardsToShow = 8; // Отображаем только 8 элементов по умолчанию\n  }\n\n  displayCards();\n  showButton.style.display = 'block'; // Показываем кнопку \"Показать все\"\n  hideButton.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n}\n\n// Функция для скрытия лишних элементов\nfunction hideExtraCards2() {\n  if (window.matchMedia('(min-width: 768px)').matches) {\n    cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию\n  }\n\n  if (window.matchMedia('(min-width: 1120px)').matches) {\n    cardsToShow2 = 4; // Отображаем только 8 элементов по умолчанию\n  }\n\n  displayCards2();\n  showButton2.style.display = 'block'; // Показываем кнопку \"Показать все\"\n  hideButton2.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n}\n\n// Вызываем функцию displayCards() при загрузке страницы\ndisplayCards();\n\n// Вызываем функцию displayCards() при загрузке страницы\ndisplayCards2();\n\n// Медиа-запрос для экранов шириной 320px\nif (window.matchMedia('(min-width: 320px)').matches) {\n  cardsToShow = servicesListCards.length; // Отображаем все элементы по умолчанию\n  showButton.style.display = 'none'; // Скрываем кнопку \"Показать все\"\n  hideButton.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n  showButton2.style.display = 'none'; // Скрываем кнопку \"Показать все\"\n  hideButton2.style.display = 'none'; // Скрываем кнопку \"Скрыть\"\n  scrollCarousel(1); // Скроллим карусель на первый элемент\n  scrollCarousel2(1); // Скроллим карусель на первый элемент\n  scrollCarousel3(1); // Скроллим карусель на первый элемент\n}\n// Медиа-запрос для экранов шириной 768px\nif (window.matchMedia('(min-width: 768px)').matches) {\n  cardsToShow = 6; // Отображаем только 6 элементов по умолчанию\n  cardsToShow2 = 3; // Отображаем только 6 элементов по умолчанию\n  hideExtraCards(); // Скрываем лишние элементы\n  hideExtraCards2(); // Скрываем лишние элементы\n}\n// Медиа-запрос для экранов шириной 1120px\nif (window.matchMedia('(min-width: 1120px)').matches) {\n  cardsToShow = 8; // Отображаем только 8 элементов по умолчанию\n  hideExtraCards(); // Скрываем лишние элементы\n}\n\nfunction scrollCarousel(index) {\n  var carousel = document.querySelector('.services__list');\n  var cardWidth = 240;\n  carousel.scrollLeft = (index - 1) * cardWidth;\n}\nfunction scrollCarousel2(index) {\n  var carousel = document.querySelector('.services__cards');\n  var cardWidth = 280;\n  carousel.scrollLeft = (index - 1) * cardWidth;\n}\nfunction scrollCarousel3(index) {\n  var carousel = document.querySelector('.services__price');\n  var cardWidth = 285;\n  carousel.scrollLeft = (index - 1) * cardWidth;\n}\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./scripts/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;