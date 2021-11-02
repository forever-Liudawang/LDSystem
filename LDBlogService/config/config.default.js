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
  config.$baseURL = 'http://localhost:7001';
  // add your middleware config here
  config.middleware = [ 'handError' ];
  config.static = {
    dir:[
      {prefix: '/static',dir:path.join(appInfo.baseDir,"app/public")},
      {prefix: '/imgs',dir:path.join(appInfo.baseDir,"app/public/imgs")}
    ]
  };
  // config.static = {
  //   prefix: '/static',
  // };
  config.siteFile = {
    "/app": fs.readFileSync(path.join(appInfo.baseDir,'app/public/blog/index.html')),
    "/manage": fs.readFileSync(path.join(appInfo.baseDir,'app/public/blogWeb/index.html'))
  }
  config.mongoose = {
    client: {
      // url: 'mongodb://localhost:27017/LDream',
      url: 'mongodb://localhost:27017/LDBlog',
      options: {
        useNewUrlParser: true,
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
