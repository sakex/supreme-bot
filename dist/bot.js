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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bot.js":
/*!********************!*\
  !*** ./src/bot.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar getTarget = function getTarget(name, color) {\n  var as = document.querySelectorAll('.inner-article');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = as[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var i = _step.value;\n      var cond = i.querySelector('h1').innerText.trim() === name && (color == undefined || color.length == 0 || i.querySelector('p').innerText.trim() === color);\n      if (cond) return i.querySelector('a');\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return false;\n};\n\nvar rendered = function rendered(query) {\n  return new Promise(function (resolve, reject) {\n    var loops = 0;\n    var elem = document.querySelector(query);\n\n    if (elem) {\n      resolve(elem);\n      return elem;\n    }\n\n    var interval = setInterval(function () {\n      elem = document.querySelector(query);\n\n      if (elem) {\n        clearInterval(interval);\n        resolve(elem);\n        return elem;\n      }\n\n      ++loops;\n      if (loops > 200) reject('Too long');\n    }, 50);\n  });\n};\n\nvar checkout =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(size) {\n    var sizeElem, options, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, i, container, checkout;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(size && size.length > 0)) {\n              _context.next = 24;\n              break;\n            }\n\n            _context.next = 3;\n            return rendered('#size');\n\n          case 3:\n            sizeElem = _context.sent;\n            options = sizeElem.querySelectorAll('option');\n            _iteratorNormalCompletion2 = true;\n            _didIteratorError2 = false;\n            _iteratorError2 = undefined;\n            _context.prev = 8;\n\n            for (_iterator2 = options[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n              i = _step2.value;\n\n              if (i.innerText === size) {\n                sizeElem.value = i.value;\n                sizeElem.dispatchEvent(new Event('change'));\n              }\n            }\n\n            _context.next = 16;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](8);\n            _didIteratorError2 = true;\n            _iteratorError2 = _context.t0;\n\n          case 16:\n            _context.prev = 16;\n            _context.prev = 17;\n\n            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n              _iterator2.return();\n            }\n\n          case 19:\n            _context.prev = 19;\n\n            if (!_didIteratorError2) {\n              _context.next = 22;\n              break;\n            }\n\n            throw _iteratorError2;\n\n          case 22:\n            return _context.finish(19);\n\n          case 23:\n            return _context.finish(16);\n\n          case 24:\n            _context.next = 26;\n            return rendered('#add-remove-buttons');\n\n          case 26:\n            container = _context.sent;\n            container.firstChild.click();\n            _context.next = 30;\n            return rendered('a.button.checkout');\n\n          case 30:\n            checkout = _context.sent;\n            setTimeout(function () {\n              checkout.click();\n            }, 100);\n\n          case 32:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[8, 12, 16, 24], [17,, 19, 23]]);\n  }));\n\n  return function checkout(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar main = function main(name, color, size) {\n  var target = getTarget(name, color);\n\n  if (target) {\n    target.click();\n    checkout(size);\n    return true;\n  } else return false;\n};\n\nchrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n  var r = main(request.item, request.color, request.size);\n\n  if (!r) {\n    sendResponse({\n      found: false\n    });\n    document.querySelector('.current').click();\n  } else sendResponse({\n    found: true\n  });\n}); //export default main;\n//Quilted Studded Leather Jacket\n//Black\n\n//# sourceURL=webpack:///./src/bot.js?");

/***/ })

/******/ });