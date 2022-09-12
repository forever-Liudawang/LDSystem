'use strict';

const BaseController  = require("./BaseController")
const moment = require("moment")
class OnlineDemoController extends BaseController {
    
    //创建文章
    async add() {
        const {ctx} = this
        const demoModel = ctx.request.body
        const resp = await ctx.model.Demo.create(demoModel)
        ctx.body = this.success()
    }
    //根据id获取文章信息
    async getList() {
        const {ctx} = this
        const {pageSize=5,pageIndex=0} = ctx.request.query
        const count = await ctx.model.Demo.find().count()
        const resp = await ctx.model.Demo.find().limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        ctx.body = this.success(resp,null,{total:count})
    }
    //更新文章
    async update(){
        const {ctx} =this
        const demoModel = ctx.request.body
        const {_id,created,updated,...reset} = demoModel
        const resp = await ctx.model.Demo.update({_id:demoModel._id},{$set:reset})
        ctx.body = this.success()
    }
    //删除文章
    async delete() {
        const {ctx} = this
        const {demoId} = ctx.request.body
        const resp = await ctx.model.Demo.deleteOne({_id:demoId})
        ctx.body = this.success()
    }
}
module.exports = OnlineDemoController;
