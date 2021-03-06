'use strict';

const BaseController = require("./BaseController")
const request = require('../util/musicRequest')
class MusciController extends BaseController {
  //轮播图
  async getBannerList() {
    const { ctx,config,logger } = this;
    const getBannerList = config.musicApi.getBannerList
    const resp = await ctx.curl(getBannerList.url,{method:getBannerList.method,data:getBannerList.data,dataType:"json"})
    ctx.body = this.success(resp.data)
  }

  //获取推荐页数据
  async getRecommendList() {
    const { ctx,config,logger } = this;
    const getRecommendList = config.musicApi.getRecommentList
    const {pageSize=9,pageIndex=0} = ctx.request.query
    const data = {
        limit: pageSize,
        offset: pageIndex * pageSize,
        total: true,
        n: 1000,
    }
    const query = Object.assign(
        {},
        { cookie: {NMTID: '00OuB1TXi2vgvwUf09drH8-fOWqbtYAAAF7kikRMg' } },
        ctx.request.query,
        ctx.request.body,
        ctx.request.files,
    )
    const resp = await request(
      getRecommendList.method,
      getRecommendList.url,
      data,
      {
          crypto: 'weapi',
          cookie: query.cookie,
          proxy: query.proxy,
          realIP: query.realIP,
      },
    )
    ctx.body = this.success(resp.body.result)
  }

  //获取推荐音乐 单项数据
  async getRecommendMusicList(){
    const {ctx,config} = this
    const {id} = ctx.request.query
    const getRecommendMusicList = config.musicApi.getRecommendMusicList
    const resp = await ctx.curl(getRecommendMusicList.url,{method:getRecommendMusicList.method,data:{id},dataType:"json"})
    ctx.body = this.success(resp.data)
  }

  //获取热门歌手
  async getHotSinger(){
    const { ctx,config,logger } = this;
    const getHotSingerList = config.musicApi.getHotSingerList
    const data = {
      limit: ctx.request.query.limit || 10,
      offset: ctx.request.query.offset*10 || 0,
      total: true,
    }
    const query = Object.assign(
        {},
        { cookie: {NMTID: '00OuB1TXi2vgvwUf09drH8-fOWqbtYAAAF7kikRMg' } },
    )
    const resp = await request(
      getHotSingerList.method,
      getHotSingerList.url,
      data,
      {
          crypto: 'weapi',
          cookie: query.cookie,
          proxy: query.proxy,
          realIP: query.realIP,
      },
    )
    
    ctx.body = this.success(resp.body.artists)
  }

  //分类歌手
  async getSingerList(){
    const { ctx,config,logger } = this;
    const {type,area,initial,page,limit} = ctx.request.query
    const getSingerList = config.musicApi.getSingerList
    logger.info(type,area,initial,page)
    const data = {
      initial: isNaN(initial)
        ? (initial || '').toUpperCase().charCodeAt() || undefined
        : initial,
      offset: page*10,
      limit: limit || 10,
      total: true,
      type: type || '1',
      area: area,
    }
    const query = Object.assign(
      {},
      { cookie: {NMTID: '00OuB1TXi2vgvwUf09drH8-fOWqbtYAAAF7kikRMg' } },
    )
    const resp = await request(
      getSingerList.method,
      getSingerList.url,
      data,
      {
          crypto: 'weapi',
          cookie: query.cookie,
          proxy: query.proxy,
          realIP: query.realIP,
      },
    )
    ctx.body = this.success(resp.body.artists)
  }

  //歌手详情页
  async getSingerDetail(){
    const { ctx,config,logger } = this;
    const getSingerDetail = config.musicApi.getSingerDetail
    const query = ctx.request.query
    const {id} = ctx.request.query
    logger.info(id)
    const resp = await request(
      getSingerDetail.method,
      getSingerDetail.url + `/${id}`,
      {},
      {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
      },
    )
    ctx.body = this.success(resp.body)
  }

  //喜欢音乐
  async likeMusic(){
    const {ctx,logger} = this;
    const {userId,musicData,isLike} = ctx.request.body
    const resp = await ctx.model.LikeMusic.find({userId})
    if(resp && resp[0]){
      if(!isLike){
        await ctx.model.LikeMusic.updateOne({userId},{$push:{"musicLikeList":musicData}})
      }else{
        //取消收藏
        const resp = await ctx.model.LikeMusic.updateOne({userId},{$pull:{"musicLikeList":{"al.id":musicData.al.id}}})
        ctx.body = this.success(resp)
        return
      }
      ctx.body = this.success()
    }else{
      const resp = await ctx.model.LikeMusic.create({userId,musicLikeList:[musicData]});
      ctx.body = this.success()
    }
  }

  async isLiked(){
    const {ctx} = this
    const {userId,mId} = ctx.request.body
    const userInfo = await ctx.model.LikeMusic.find({userId})
    if(userInfo && userInfo[0]){
      const likeList = userInfo[0].musicLikeList
      const isLiked = likeList.some(item=>{
        return mId === item.al.id
      })
      ctx.body = this.success(isLiked)
    }else{
      ctx.body = this.success(false)
    }
  }
}

module.exports = MusciController;
