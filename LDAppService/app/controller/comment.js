'use strict';

const BaseController = require("./BaseController");
const { mongoose } = require("../../config/plugin");
class CommentController extends BaseController {
  async insert(){
    const { ctx,logger} = this;
    const comment = ctx.request.body;
    logger.info(comment)
    if(comment && comment.isReplay){
        //对应评论增加回复评论数
        await ctx.model.Comment.updateOne({_id:comment.commentId},{$inc:{replayNum:1}})
    }else{
        //增加一条评论数
        await ctx.model.Post.updateOne({_id:comment.postId},{$inc:{commentNum:1}})
    }
    const res = await ctx.model.Comment.create(comment);
    ctx.body = this.success()
  }
  //不是回复的评论
  async getComment(){
    const {ctx,config,app} = this;
    /**
     * sortType 1 最晚回复
     *  2 最早回复
     *  3 亮度排序
     */
    const {pageIndex,pageSize=10,sortType=2,postId} = ctx.request.query
    let sort = {}
    if(sortType == 1){
        sort= {'created':-1}
    }else if(sortType == 2){
        sort = {'created':1}
    }else if(sort == 3){
        sort = {light:1}
    }
    // const res = await ctx.model.Comment.find({postId,isReplay:false}).skip(pageIndex*pageSize).limit(pageSize).count().sort(sort)
    /**
     * 聚合查询 _id 必须通过 app.mongoose.Types.ObjectId匹配
     */
    const res = await ctx.model.Comment.aggregate([
        {"$match":{postId: app.mongoose.Types.ObjectId(postId),isReplay:false}},
        {
            "$facet":{
                "total":[{"$count":"total"}],
                "data":[
                    {"$skip":pageIndex*pageSize},
                    {"$limit":pageSize}
                ]
            }
        }
    ])
    ctx.body = this.success(res)
  }
  //获取回复的评论
  async getReplayComment(){
    const {ctx} = this
    const {commentId} = ctx.request.query
    const res = await ctx.model.Comment.find({commentId});
    ctx.body = this.success(res);
  }
  async lightComment(){
    const {ctx} = this;
    const {commentId} = ctx.request.body
    await ctx.model.Comment.updateOne({_id:commentId},{$inc:{light:1}})
    await ctx.model.UserPost.updateOne({userId},{$push:{"postIdlikeArr":postId}})
    await ctx.model.PostUser.updateOne({postId},{$push:{"userIdlikeArr":userId}})
    ctx.body = this.success()
  }
}
module.exports = CommentController;
