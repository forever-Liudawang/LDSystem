/* eslint valid-jsdoc: "off" */

'use strict';
const musicApi = require('./musicApi');
const path =require('path')
const fs = require('fs')
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
  config.$baseURL = 'http://localhost:7002';
  config.musicApi = musicApi;
  // add your middleware config here
  config.middleware = ['handError'];
  // config.static = {
  //   prefix: '/static',
  // };
  config.static = {
    dir:[
      {prefix: '/hupu/static',dir:path.join(appInfo.baseDir,"app/public/hupu/static")},
      {prefix: '/imgs',dir:path.join(appInfo.baseDir,"app/public/imgs")}
    ]
  };
  config.siteFile = {
    "/hupu": fs.readFileSync(path.join(appInfo.baseDir,'app/public/hupu/index.html')),
  }
  config.mongoose = {
    client: {
      // url: 'mongodb://localhost:27017/LDream',
      // url: 'mongodb://localhost:27017/HUPU',
      url:'mongodb://110.42.186.20:9399/LDBlog',
      options: {
        useNewUrlParser: true,
        user: "admin",
        pass: "19980719liuliu"
        // useUnifiedTopology
        // useUnifiedTopology:true
      },
    },
  };
  config.cluster = {
    listen: {
      path: '',
      port: 8001,
      hostname: '127.0.0.1', // 0.0.0.0
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};