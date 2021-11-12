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
  !*** ./app/main/electron.js ***!
  \******************************/


/**
 * @desc electron 主入口
 */
var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! electron */ "electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

function IsDev() {
  return process.env.NODE_END == "development";
}

function createWindow() {
  // 创建浏览器窗口
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true // 注入node模块

    }
  });

  if (IsDev) {
    mainWindow.loadURL('http://127.0.0.1:8082');
  } else {
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../../dist/index.html')));
  }
}

app.whenReady().then(function () {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxlQUdJQSxtQkFBTyxDQUFDLDBCQUFELENBSFg7QUFBQSxJQUNJQyxHQURKLFlBQ0lBLEdBREo7QUFBQSxJQUVJQyxhQUZKLFlBRUlBLGFBRko7O0FBS0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLFNBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLElBQXdCLGFBQS9CO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxHQUF3QjtBQUNwQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJTixhQUFKLENBQWtCO0FBQ2pDTyxJQUFBQSxLQUFLLEVBQUUsSUFEMEI7QUFFakNDLElBQUFBLE1BQU0sRUFBRSxHQUZ5QjtBQUdqQ0MsSUFBQUEsY0FBYyxFQUFFO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxJQURFO0FBRVpDLE1BQUFBLGVBQWUsRUFBRSxJQUZMLENBRVc7O0FBRlg7QUFIaUIsR0FBbEIsQ0FBbkI7O0FBUUEsTUFBSVYsS0FBSixFQUFXO0FBQ1BLLElBQUFBLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQix1QkFBbkI7QUFDSCxHQUZELE1BRU87QUFDSDtBQUNBTixJQUFBQSxVQUFVLENBQUNNLE9BQVgsa0JBQTZCZixJQUFJLENBQUNnQixJQUFMLENBQVVDLFNBQVYsRUFBcUIsdUJBQXJCLENBQTdCO0FBQ0g7QUFDSjs7QUFFRGYsR0FBRyxDQUFDZ0IsU0FBSixHQUFnQkMsSUFBaEIsQ0FBcUIsWUFBTTtBQUN2QlgsRUFBQUEsWUFBWTtBQUNaTixFQUFBQSxHQUFHLENBQUNrQixFQUFKLENBQU8sVUFBUCxFQUFtQixZQUFZO0FBQzNCLFFBQUlqQixhQUFhLENBQUNrQixhQUFkLEdBQThCQyxNQUE5QixLQUF5QyxDQUE3QyxFQUFnRGQsWUFBWTtBQUMvRCxHQUZEO0FBR0gsQ0FMRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTERFbGVjdHJvbi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly9MREVsZWN0cm9uL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vTERFbGVjdHJvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MREVsZWN0cm9uLy4vYXBwL21haW4vZWxlY3Ryb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xyXG4gKi9cclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3Qge1xyXG4gICAgYXBwLFxyXG4gICAgQnJvd3NlcldpbmRvd1xyXG59ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuXHJcbmZ1bmN0aW9uIElzRGV2KCkge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5EID09IFwiZGV2ZWxvcG1lbnRcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XHJcbiAgICAvLyDliJvlu7rmtY/op4jlmajnqpflj6NcclxuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICAgICAgd2lkdGg6IDEyMDAsXHJcbiAgICAgICAgaGVpZ2h0OiA4MDAsXHJcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgICAgICAgZGV2VG9vbHM6IHRydWUsXHJcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSwgLy8g5rOo5YWlbm9kZeaooeWdl1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChJc0Rldikge1xyXG4gICAgICAgIG1haW5XaW5kb3cubG9hZFVSTCgnaHR0cDovLzEyNy4wLjAuMTo4MDgyJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbWFpbldpbmRvdy5sb2FkRmlsZSgnaW5kZXguaHRtbCcpO1xyXG4gICAgICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICBjcmVhdGVXaW5kb3coKTtcclxuICAgIGFwcC5vbignYWN0aXZhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiYXBwIiwiQnJvd3NlcldpbmRvdyIsIklzRGV2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5EIiwiY3JlYXRlV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJkZXZUb29scyIsIm5vZGVJbnRlZ3JhdGlvbiIsImxvYWRVUkwiLCJqb2luIiwiX19kaXJuYW1lIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=