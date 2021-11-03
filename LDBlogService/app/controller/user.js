'use strict';

const BaseController  = require("./BaseController")
class UserController extends BaseController {
    async login(){
        const { ctx,logger,config} = this;
        const {username,password} = ctx.request.body
        const resp = await ctx.model.User.find({userName:username})
        if(resp && resp[0]){
            if(password == resp[0].passWord){
                ctx.body = this.success({token:"FALSETOKEN"})
            }else{
                ctx.body = this.error("用户名或密码错误")
            }
        }else{
            ctx.body = this.error("用户名或密码错误")
        }
    }
    async logout () {
        this.ctx.body = this.success()
    }
    async index(){
        this.ctx.body = 123
    }
}

module.exports = UserController;
