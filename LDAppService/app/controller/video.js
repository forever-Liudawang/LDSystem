'use strict';

const BaseController = require("./BaseController")

class VideoController extends BaseController {
    async insert(){
        const {ctx} = this
        const body = ctx.request.body
        const res = await ctx.model.Video.create(body)
        ctx.body = this.success(res)
    }

    //获取视频列表
    async getList(){
        const {ctx,logger} = this
        const {userId,pageSize=5,pageIndex=0} = ctx.request.query
        const userVideo = ctx.model.UserVideo.find({userId})
        let videoList = await ctx.model.Video.find().skip(pageIndex*pageSize).limit(+pageSize)
        if(videoList){
            if(userVideo && userVideo[0]){
                const likeVideoList = userVideo[0].likeVideoList
                /**
                 * 循环判断视频是否被喜欢过
                 */
                videoList = videoList.map(item=>{
                    const videoObj = {userId,videoUrl,desc,likeNum,commentNum} = item
                    if(likeVideoList.includes(item._id)){
                        return {
                            ...videoObj,
                            liked:true
                        }
                    }else{
                        return {
                            ...videoObj,
                            liked:false
                        }
                    }
                })
            }
        }
        ctx.body = this.success(videoList)
    }

    //点赞视频
    async likeVideo(){
        const {ctx} = this
        const {userId,videoId} = ctx.request.body
        await ctx.model.Video.updateOne({_id:videoId},{$inc:{"likeNum":1}})
        await ctx.model.VideoUser.updateOne({_id:videoId},{$push:{"likeUserList":userId}})
        await ctx.model.UserVideo.updateOne({_id:userId},{$push:{"likeVideoList":userId}})
        ctx.body = this.success(true)
    }
    //取消点赞视频
    async unLikeVideo(){
        const {ctx} = this
        const {userId,videoId} = ctx.request.body
        await ctx.model.Video.updateOne({_id:videoId},{$inc:{"likeNum":-1}})
        await ctx.model.VideoUser.updateOne({_id:videoId},{$pull:{"likeUserList":userId}})
        await ctx.model.UserVideo.updateOne({_id:userId},{$pull:{"likeVideoList":userId}})
        ctx.body = this.success(false)
    }
}

module.exports = VideoController;
