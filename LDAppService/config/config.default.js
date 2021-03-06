/* eslint valid-jsdoc: "off" */

'use strict';
const musicApi = require('./musicApi');
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
  config.musicApi = musicApi;
  // add your middleware config here
  config.middleware = [ 'handError' ];
  config.static = {
    prefix: '/static',
  };
  config.mongoose = {
    client: {
      // url: 'mongodb://localhost:27017/LDream',
      url: 'mongodb://localhost:27017/LDSystem',
      options: {
        useNewUrlParser: true,
      },
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
