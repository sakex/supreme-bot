/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pay.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pay.js":
/*!********************!*\
  !*** ./src/pay.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var setMethod = function setMethod(method, card, CVV, mois, year) {\n  return new Promise(function (resolve) {\n    var elem = document.querySelector('#credit_card_type');\n    elem.value = method;\n    elem.dispatchEvent(new Event('change'));\n    if (method = 'paypal') resolve();\n    setTimeout(function () {\n      var cardElem = document.querySelector('#cnb'),\n          CVVElem = document.querySelector('#vval'),\n          moisElem = document.querySelector('#credit_card_month'),\n          yearElem = document.querySelector('#credit_card_year');\n      moisElem.value = mois;\n      moisElem.dispatchEvent(new Event('change'));\n      yearElem.value = year;\n      yearElem.dispatchEvent(new Event('change'));\n      cardElem.value = card;\n      cardElem.dispatchEvent(new Event('change'));\n      CVVElem.value = CVV;\n      CVVElem.dispatchEvent(new Event('change'));\n      resolve();\n    }, 100);\n  });\n};\n\nvar pay = function pay(method, card, CVV, mois, year) {\n  setMethod(method, card, CVV, mois, year).then(function () {\n    var terms = document.querySelector('.terms');\n    terms.click();\n    var pay_button = document.querySelector('.checkout');\n    pay_button.click();\n  });\n};\n\nchrome.runtime.sendMessage({\n  page: \"pay\"\n}, function (response) {\n  var method = response.method,\n      card = response.card,\n      CVV = response.CVV,\n      mois = response.mois,\n      year = response.year;\n  pay(method, card, CVV, mois, year);\n});\n/*\r\n\r\nchrome.runtime.sendMessage({\r\n  pay: 'loaded'\r\n}, response => {\r\n  if (response)\r\n    pay(response.method, response.card, response.CVV);\r\n});\r\n*/\n//Corduroy Detailed Zip Sweater\n\n//# sourceURL=webpack:///./src/pay.js?");

/***/ })

/******/ });