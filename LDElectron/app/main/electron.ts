/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow } from 'electron';
function IsDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 750,
    minWidth: 1200,
    minHeight: 750,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
      contextIsolation: false,
    },
  });
  console.log(IsDev(), process.env.NODE_ENV, 'IsDev()');
  if (IsDev()) {
    mainWindow.loadURL('http://localhost:8080/static/music/#/index');
  } else {
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL(`file://${path.join(__dirname, '../../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
