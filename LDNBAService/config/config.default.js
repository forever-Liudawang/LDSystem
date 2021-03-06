/* eslint valid-jsdoc: "off" */

const fs = require("fs")
const path = require("path")
'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629118206702_1191';
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*',
  };
  // config.$baseURL = 'http://192.168.1.90:7001';
  config.$baseURL = 'http://127.0.0.1:7001';
  // add your middleware config here
  config.middleware = [ 'handError' ];
  config.static = {
    dir:[
      {prefix: '/static',dir:path.join(appInfo.baseDir,"app/public")},
      {prefix: '/imgs',dir:path.join(appInfo.baseDir,"app/public/imgs")}
    ]
  };
  // config.siteFile = {
  //   "/web": fs.readFileSync(path.join(appInfo.baseDir,'app/public/web/index.html')),
  //   "/manage": fs.readFileSync(path.join(appInfo.baseDir,'app/public/manage/index.html')),
  //   "/Ldmusic": fs.readFileSync(path.join(appInfo.baseDir,'app/public/music/index.html')),
  //   "/app": fs.readFileSync(path.join(appInfo.baseDir,'app/public/app/index.html'))
  // }
  config.multipart = {

  }
  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/NBA',
      // url: 'mongodb://110.42.186.20:9399/LDBlog',
      options: {
        useNewUrlParser: true,
        // user: "admin",
        // pass: "19980719liuliu"
        // useUnifiedTopology
        // useUnifiedTopology:true
      },
    },
  };
  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 8090,
  //     hostname: '0.0.0.0',
  //   }
  // };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
