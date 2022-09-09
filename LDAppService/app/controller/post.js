'use strict';
const BaseController = require("./BaseController")
const sendToWormhole = require('stream-wormhole');
//故名思意 异步二进制 写入流
// const awaitWriteStream = require('await-stream-ready').write;
const path = require("path")
const fs = require("fs")
class PostController extends BaseController {
  async uploadFile(){
    const { ctx,logger,config} = this;
    const stream = await ctx.getFileStream()
    const filename = new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase();
    const target = path.join(this.config.baseDir, 'app/public/imgs', filename);
    const writeStream = fs.createWriteStream(target);
    const baseURl = config.$baseURL
    try {
        stream.pipe(writeStream)
        ctx.body = this.success(baseURl + '/imgs/' + filename);
    } catch (err) {
        //如果出现错误，关闭管道
        await sendToWormhole(stream);
        throw err;
    }
  }

  async insert(){
    const { ctx,logger} = this;
    const post = ctx.request.body;
    const res = await ctx.service.post.insert(post)
    ctx.body = this.success(res)
  }

  /**
   * 获取帖子 并判断用户是否点亮
   */
  async getList(){
    const { ctx,logger} = this;
    const {userId,cateId,pageIndex=0,pageSize=5} = ctx.request.query
    let resList = []
    let postList = await ctx.model.Post.find({cateId}).skip(pageIndex*pageSize).limit(+pageSize)
    resList = postList
    let likePostArr = []
    if(userId){
      const userPost = await ctx.model.UserPost.find({userId}).skip(pageIndex*pageSize).limit(+pageSize)
      likePostArr = userPost && userPost[0] && userPost[0].postIdlikeArr;
    }
    resList = postList.map(item=>{
      let lighted = false
      if(likePostArr&&likePostArr.indexOf(item._id)>-1){
        lighted = true
      }
      return {
        data:item,
        lighted
      }
    })
    ctx.body = this.success(resList)
  }
  //获取某一条帖子数据
  async getPostById(){
    const {ctx} = this
    const {postId,userId} = ctx.request.query;
    const res = await ctx.model.Post.find({_id:postId})
    let likePostArr = []
    let resp = {
      data:res[0],
      lighted:false
    };
    if(userId){
      const userPost = await ctx.model.UserPost.find({userId})
      if(userPost[0]){
        likePostArr =  userPost[0].postIdlikeArr;
      }
    }
    if(likePostArr.indexOf(res[0]._id)>-1){
      resp.lighted = true
    }
    ctx.body = this.success(resp);
  }

  //获取我的帖子
  async getMyPost(){
    const {ctx} = this
    const {userId} = ctx.request.query
    const res = await ctx.model.Post.find({userId})
    ctx.body = this.success(res)
  }
  //点亮
  async light(){
    const {ctx} = this;
    const {postId,userId} = ctx.request.body
    await ctx.model.Post.updateOne({_id:postId},{$inc:{light:1}})
    await ctx.model.UserPost.updateOne({userId},{$push:{"postIdlikeArr":postId}})
    await ctx.model.PostUser.updateOne({postId},{$push:{"userIdlikeArr":userId}})
    ctx.body = this.success()
  }
  async unLight(){
    const {ctx} = this;
    const {postId,userId} = ctx.request.body
    await ctx.model.Post.updateOne({_id:postId},{$inc:{light:-1}})
    await ctx.model.UserPost.updateOne({userId},{$pull:{"postIdlikeArr":postId}})
    await ctx.model.PostUser.updateOne({postId},{$pull:{"userIdlikeArr":userId}})
    ctx.body = this.success()
  }
  //获取用户推荐的帖子
  async getRecommend(){
    const  {ctx} = this
    const {userId} = ctx.request.query
    this.logger.info(userId,"userId")
    const resp = await ctx.model.UserPost.find({userId})
    //根据数组查询帖子
    if(resp && resp[0] && resp[0].postIdlikeArr){
      const list = await ctx.model.Post.find({"_id":{"$in":resp[0].postIdlikeArr}});
      this.logger.info(list,"list")
      ctx.body = this.success(list)
    }else{
      ctx.body = this.success([])
    }
  }
}

module.exports = PostController;
