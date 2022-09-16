'use strict';

const BaseController = require("./BaseController")
class UserFollowController extends BaseController {
  //获取某个用户的关注列表;
  async getFollow(){
    const {ctx} = this
    const {userId} = ctx.request.query
    const res = await ctx.model.UserFollow.find({userId})
    if(res && res[0] && res[0]["followArr"]){
        const list = await ctx.model.User.find({"_id":{"$in":res[0]["followArr"]}},{"passWord":0});
        ctx.body = this.success(list)
    }else{
        ctx.body = this.success([])
    }
  }
  //判断用户是否已经关注
  async isFollowed(){
      const {ctx} = this 
      const {userId,tId} = ctx.request.body
      const followList = await ctx.model.UserFollow.find({userId})
      if(followList && followList[0] && followList[0]["followArr"].includes(tId)){
          ctx.body = this.success(true)
      }else{
        ctx.body = this.success(false)
      }
  }
  //关注
  async following(){
      const {ctx} = this
      const {userId,tId} = ctx.request.body
      const followModel = await ctx.model.UserFollow.find({userId})
      if(followModel && followModel.length==0){
        const model = {
            userId,
            followArr:[tId]
        }
        await ctx.model.UserFollow.create(model)
      }else{
        const d = followModel[0]["followArr"]
        if(d.includes(tId)){
            ctx.body = this.success(true)
            return
        }else{
            await ctx.model.UserFollow.updateOne({userId},{$push:{"followArr":tId}})
        }
      }
      ctx.body = this.success(true)
  }
  //取消关注
  async unFollowing(){
    const {ctx} = this
    const {userId,tId} = ctx.request.body
    const followModel = await ctx.model.UserFollow.find({userId})
    const d = followModel[0]["followArr"]
    if(d.includes(tId)){
        await ctx.model.UserFollow.updateOne({userId},{$pull:{"followArr":tId}})
    }
    ctx.body = this.success(true)
  }
}

module.exports = UserFollowController;
