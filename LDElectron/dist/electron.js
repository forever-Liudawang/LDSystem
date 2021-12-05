/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

function _path() {
  var data = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

  _path = function _path() {
    return data;
  };

  return data;
}

function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");

  _electron = function _electron() {
    return data;
  };

  return data;
}

/**
 * @desc electron 主入口
 */
function IsDev() {
  return "development" === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new (_electron().BrowserWindow)({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      // 注入node模块
      contextIsolation: false
    }
  });
  console.log(IsDev(), "development", 'IsDev()');

  if (IsDev()) {
    mainWindow.loadURL('http://localhost:8009');
  } else {
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL("file://".concat(_path()["default"].join(__dirname, '../../dist/index.html')));
  }
}

_electron().app.whenReady().then(function () {
  createWindow();

  _electron().app.on('activate', function () {
    if (_electron().BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7Ozs7OztBQ1ByRTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUpBO0FBQ0E7QUFDQTtBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixTQUFPQyxhQUFBLEtBQXlCLGFBQWhDO0FBQ0Q7O0FBRUQsU0FBU0csWUFBVCxHQUF3QjtBQUN0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxLQUFJQyx5QkFBSixFQUFrQjtBQUNuQ0MsSUFBQUEsS0FBSyxFQUFFLElBRDRCO0FBRW5DQyxJQUFBQSxNQUFNLEVBQUUsR0FGMkI7QUFHbkNDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxRQUFRLEVBQUUsSUFESTtBQUVkQyxNQUFBQSxlQUFlLEVBQUUsSUFGSDtBQUVTO0FBQ3ZCQyxNQUFBQSxnQkFBZ0IsRUFBRTtBQUhKO0FBSG1CLEdBQWxCLENBQW5CO0FBU0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFLLEVBQWpCLEVBQXFCQyxhQUFyQixFQUEyQyxTQUEzQzs7QUFDQSxNQUFJRCxLQUFLLEVBQVQsRUFBYTtBQUNYSyxJQUFBQSxVQUFVLENBQUNVLE9BQVgsQ0FBbUIsdUJBQW5CO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQVYsSUFBQUEsVUFBVSxDQUFDVSxPQUFYLGtCQUE2QkMsbUJBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQix1QkFBckIsQ0FBN0I7QUFDRDtBQUNGOztBQUVEQyxnQkFBSUMsU0FBSixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtBQUN6QmpCLEVBQUFBLFlBQVk7O0FBQ1plLGtCQUFJRyxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFZO0FBQzdCLFFBQUloQiwwQkFBY2lCLGFBQWQsR0FBOEJDLE1BQTlCLEtBQXlDLENBQTdDLEVBQWdEcEIsWUFBWTtBQUM3RCxHQUZEO0FBR0QsQ0FMRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTERFbGVjdHJvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9MREVsZWN0cm9uL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL0xERWxlY3Ryb24vZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9MREVsZWN0cm9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xERWxlY3Ryb24vLi9hcHAvbWFpbi9lbGVjdHJvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBAZGVzYyBlbGVjdHJvbiDkuLvlhaXlj6NcclxuICovXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSBmcm9tICdlbGVjdHJvbic7XHJcbmZ1bmN0aW9uIElzRGV2KCkge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZG93KCkge1xyXG4gIC8vIOWIm+W7uua1j+iniOWZqOeql+WPo1xyXG4gIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIGhlaWdodDogODAwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSwgLy8g5rOo5YWlbm9kZeaooeWdl1xyXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coSXNEZXYoKSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYsICdJc0RldigpJyk7XHJcbiAgaWYgKElzRGV2KCkpIHtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnaHR0cDovL2xvY2FsaG9zdDo4MDA5Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIG1haW5XaW5kb3cubG9hZEZpbGUoJ2luZGV4Lmh0bWwnKTtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLndoZW5SZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNyZWF0ZVdpbmRvdygpO1xyXG4gIGFwcC5vbignYWN0aXZhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVXaW5kb3coKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJJc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJCcm93c2VyV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ3ZWJQcmVmZXJlbmNlcyIsImRldlRvb2xzIiwibm9kZUludGVncmF0aW9uIiwiY29udGV4dElzb2xhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVVJMIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJhcHAiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwib24iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==