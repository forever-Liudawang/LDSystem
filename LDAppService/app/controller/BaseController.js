'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data,msg){
      return {
          success: true,
          message:msg || "成功",
          data
      }
  }
  error(msg){
      return {
          success:false,
          message:msg || "失败",
          data:null
      }
  }
}

module.exports = BaseController;
