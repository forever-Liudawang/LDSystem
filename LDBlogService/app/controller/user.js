'use strict';

const Controller = require('egg').Controller;
const BaseController = require("./BaseController")
class UserController extends BaseController {
  async insert() {
    const {
      ctx,
      logger
    } = this;
    const user = ctx.request.body;
    const res = await ctx.service.user.insert(user)
    ctx.body = this.success()
  }
  async userNameIsRepeat() {
    const {
      ctx,
      logger
    } = this;
    const {
      userName
    } = ctx.request.query
    const res = await ctx.model.User.find({
      "userName": userName
    })
    ctx.body = this.success(res)
  }
  async getUser() {
    const {
      ctx
    } = this;
    const res = await ctx.service.user.getUser()
    ctx.body = this.success(res)
  }
  //获取用户信息
  async getUserById() {
    const {
      ctx
    } = this
    const {
      userId
    } = ctx.request.query
    const res = await ctx.model.User.find({
      _id: userId
    })
    if (res && res[0]) {
      ctx.body = this.success(res[0])
    } else {
      ctx.body = this.error()
    }
  }
  //更新头像
  async updateAvatar() {
    const {
      ctx,
      logger
    } = this;
    const {
      imgSrc,
      userId
    } = ctx.request.body
    const res = await ctx.model.User.updateOne({
      _id: userId
    }, {
      "$set": {
        "avatar": imgSrc
      }
    })
    ctx.body = this.success()
  }
  //更新用户名
  async updateUserName() {
    const {
      ctx,
      logger
    } = this;
    const {
      userName,
      userId
    } = ctx.request.body
    const res = await ctx.model.User.updateOne({
      _id: userId
    }, {
      "$set": {
        userName
      }
    })
    ctx.body = this.success()
  }
  //更新签名
  async updateSign() {
    const {
      ctx,
      logger
    } = this;
    const {
      sign,
      userId
    } = ctx.request.body
    const res = await ctx.model.User.updateOne({
      _id: userId
    }, {
      "$set": {
        sign
      }
    })
    ctx.body = this.success()
  }
  //修改密码 
  async updatePsd() {
    const {
      ctx,
      logger
    } = this;
    const {
      psd,
      userId
    } = ctx.request.body
    const res = await ctx.model.User.updateOne({
      _id: userId
    }, {
      "$set": {
        passWord: psd
      }
    })
    ctx.body = this.success()
  }
  async login() {
    const {
      ctx,
      logger,
      config
    } = this;
    const {
      username,
      password
    } = ctx.request.body
    const resp = await ctx.model.User.find({
      userName: username
    })
    if (resp && resp[0]) {
      let role = ''
      if (password == resp[0].passWord) {
        if (username == 'admin') {
          role = 'admin'
        } else {
          role = 'tourist'
        }
        ctx.body = this.success({
          token: "FALSETOKEN",
          role
        })
      } else {
        ctx.body = this.error("用户名或密码错误")
      }
    } else {
      ctx.body = this.error("用户名或密码错误")
    }
  }
  async logout() {
    this.ctx.body = this.success()
  }
  async index() {
    this.ctx.body = 123
  }
}

module.exports = UserController;