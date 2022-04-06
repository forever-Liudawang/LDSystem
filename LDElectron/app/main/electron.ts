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
    width: 1150,
    height: 750,
    minWidth: 1200,
    minHeight: 750,
    // titleBarStyle: 'hidden',
    // useContentSize: true,
    // frame: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
      contextIsolation: false,
    },
    title: 'AndyLiuMusic',
    icon: path.join(__dirname, '../../assets/logo.ico'),
  });
  mainWindow.setMenu(null);
  // mainWindow.loadURL('http://localhost:8080/static/music/#/index');
  if (IsDev()) {
    mainWindow.loadURL('http://localhost:8080/static/music/#/index');
  } else {
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL('http://andy.lmytest.top/Ldmusic#/index');
    // mainWindow.loadURL('http://localhost:8080/static/music/#/index');
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
