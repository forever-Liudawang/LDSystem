/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/


var _interopRequireDefault = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@babel/runtime/helpers/interopRequireDefault'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
    height: 750,
    minWidth: 1200,
    minHeight: 750,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      // 注入node模块
      contextIsolation: false
    }
  });
  console.log(IsDev(), "development", 'IsDev()');

  if (IsDev()) {
    mainWindow.loadURL('http://localhost:8080/static/music/#/index');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUpBO0FBQ0E7QUFDQTtBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixTQUFPQyxhQUFBLEtBQXlCLGFBQWhDO0FBQ0Q7O0FBRUQsU0FBU0csWUFBVCxHQUF3QjtBQUN0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxLQUFJQyx5QkFBSixFQUFrQjtBQUNuQ0MsSUFBQUEsS0FBSyxFQUFFLElBRDRCO0FBRW5DQyxJQUFBQSxNQUFNLEVBQUUsR0FGMkI7QUFHbkNDLElBQUFBLFFBQVEsRUFBRSxJQUh5QjtBQUluQ0MsSUFBQUEsU0FBUyxFQUFFLEdBSndCO0FBS25DQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsUUFBUSxFQUFFLElBREk7QUFFZEMsTUFBQUEsZUFBZSxFQUFFLElBRkg7QUFFUztBQUN2QkMsTUFBQUEsZ0JBQWdCLEVBQUU7QUFISjtBQUxtQixHQUFsQixDQUFuQjtBQVdBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQUssRUFBakIsRUFBcUJDLGFBQXJCLEVBQTJDLFNBQTNDOztBQUNBLE1BQUlELEtBQUssRUFBVCxFQUFhO0FBQ1hLLElBQUFBLFVBQVUsQ0FBQ1ksT0FBWCxDQUFtQiw0Q0FBbkI7QUFDRCxHQUZELE1BRU87QUFDTDtBQUNBWixJQUFBQSxVQUFVLENBQUNZLE9BQVgsa0JBQTZCQyxtQkFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLHVCQUFyQixDQUE3QjtBQUNEO0FBQ0Y7O0FBRURDLGdCQUFJQyxTQUFKLEdBQWdCQyxJQUFoQixDQUFxQixZQUFNO0FBQ3pCbkIsRUFBQUEsWUFBWTs7QUFDWmlCLGtCQUFJRyxFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFZO0FBQzdCLFFBQUlsQiwwQkFBY21CLGFBQWQsR0FBOEJDLE1BQTlCLEtBQXlDLENBQTdDLEVBQWdEdEIsWUFBWTtBQUM3RCxHQUZEO0FBR0QsQ0FMRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTERFbGVjdHJvbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9MREVsZWN0cm9uL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vTERFbGVjdHJvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MREVsZWN0cm9uLy4vYXBwL21haW4vZWxlY3Ryb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xyXG4gKi9cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcclxuZnVuY3Rpb24gSXNEZXYoKSB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XHJcbiAgLy8g5Yib5bu65rWP6KeI5Zmo56qX5Y+jXHJcbiAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgaGVpZ2h0OiA3NTAsXHJcbiAgICBtaW5XaWR0aDogMTIwMCxcclxuICAgIG1pbkhlaWdodDogNzUwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSwgLy8g5rOo5YWlbm9kZeaooeWdl1xyXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coSXNEZXYoKSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYsICdJc0RldigpJyk7XHJcbiAgaWYgKElzRGV2KCkpIHtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3N0YXRpYy9tdXNpYy8jL2luZGV4Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIG1haW5XaW5kb3cubG9hZEZpbGUoJ2luZGV4Lmh0bWwnKTtcclxuICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLndoZW5SZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gIGNyZWF0ZVdpbmRvdygpO1xyXG4gIGFwcC5vbignYWN0aXZhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkubGVuZ3RoID09PSAwKSBjcmVhdGVXaW5kb3coKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJJc0RldiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNyZWF0ZVdpbmRvdyIsIm1haW5XaW5kb3ciLCJCcm93c2VyV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIndlYlByZWZlcmVuY2VzIiwiZGV2VG9vbHMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwiY29uc29sZSIsImxvZyIsImxvYWRVUkwiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImFwcCIsIndoZW5SZWFkeSIsInRoZW4iLCJvbiIsImdldEFsbFdpbmRvd3MiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9