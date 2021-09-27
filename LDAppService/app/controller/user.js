'use strict';

const Controller = require('egg').Controller;
const BaseController = require("./BaseController")
class UserController extends BaseController {
  async insert(){
    const { ctx,logger} = this;
    const user = ctx.request.body;
    const res = await ctx.service.user.insert(user)
    ctx.body = this.success()
  }
  async userNameIsRepeat(){
    const { ctx,logger} = this;
    const {userName} = ctx.request.query
    const res = await ctx.model.User.find({"userName":userName})
    ctx.body = this.success(res)
  }
  async getUser(){
    const { ctx } = this;
    const res = await ctx.service.user.getUser()
    ctx.body = this.success(res)
  }
  async login(){
    const userModel = this.ctx.request.body
    const res = await this.ctx.service.user.login(userModel)
    this.ctx.body = res;
  }
}

module.exports = UserController;
