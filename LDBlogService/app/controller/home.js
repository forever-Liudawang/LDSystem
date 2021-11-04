'use strict';

const BaseController  = require("./BaseController")
const path = require("path")
const fs = require("fs")
const OSS = require("ali-oss")
const sendToWormhole = require("stream-wormhole")
//https://help.aliyun.com/document_detail/31837.html
const ossInfo = {
    region:"oss-cn-beijing",
    bucket:"blog-andy-liu",
    accessKeyId:"LTAI5tR8mufkB4XwAvKGsNhC",
    accessKeySecret:"guTH7TrHJAtf8ehgd1cbHfq7FThNJz",
    endpoint:"oss-cn-beijing.aliyuncs.com"
}
const ossClient = new OSS(ossInfo)
class HomeController extends BaseController {
    async uploadImg(){
        const { ctx,logger,config} = this;
        const stream = await ctx.getFileStream()
        const filename = new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase();
        try {
            const resp = await ossClient.putStream(filename,stream)
            ctx.body = this.success(resp.url?resp.url:"");
        } catch (err) {
            //如果出现错误，关闭管道
            await sendToWormhole(stream);
            throw err;
        }
    }
    async index(){
        this.ctx.body = 123
    }
}

module.exports = HomeController;
