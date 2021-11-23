'use strict';

const BaseController  = require("./BaseController")
const moment = require("moment")
class ArticleController extends BaseController {
    async index(){
        this.ctx.body = 123
    }
    
    //创建文章
    async createArtice() {
        const {ctx} = this
        const articleModel = ctx.request.body
        const resp = await ctx.model.Article.create(articleModel)
        ctx.body = this.success()
    }
    //根据id获取文章信息
    async getArticleById() {
        const {ctx} = this
        const {articleId} = ctx.request.query
        const resp = await ctx.model.Article.find({_id: articleId})
        ctx.body = this.success(resp)
    }
    //更新文章
    async updateArticle(){
        const {ctx} =this
        const articleModel = ctx.request.body
        const {_id,created,updated,...reset} = articleModel
        const resp = await ctx.model.Article.update({_id:articleModel._id},{$set:reset})
        ctx.body = this.success()
    }
    //删除文章
    async deleteArticle() {
        const {ctx} = this
        const {articleId} = ctx.request.body
        const resp = await ctx.model.Article.deleteOne({_id:articleId})
        ctx.body = this.success()
    }
    /**
     * 模糊查询管理端 $regex
     */
    async getArticleList() {
        const {ctx} = this
        const {articleCate=0,publishTime,searchKey,pageSize=10,pageIndex=0} = ctx.request.query
        const filterModel = {}
        let filterTime = {}
        if(articleCate != 0){
            filterModel.articleCate = articleCate
        }else if(searchKey!= ""){
            const reg = {$regex:searchKey}
            const t = [{content:reg},{articleDesc:reg},{articleTitle:reg}]
            filterModel.$or = t
        }
        if(publishTime){
            let d1 = new Date(moment(new Date(parseInt(publishTime, 10))).format('YYYY-MM-DD'));
            let d2 = new Date(moment(new Date(parseInt(publishTime, 10))).add(1, 'days').format('YYYY-MM-DD'));
            filterTime = {
                created:{
                    $gte: d1,
                    $lt: d2
                }
            }
        }
        const count = await ctx.model.Article.find(filterModel).find(filterTime).count()
        const resp = await ctx.model.Article.find(filterModel).find(filterTime).limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        ctx.body = this.success(resp,null,{total:count})
    }
    /**
     * 获取首页三个分类文章数据
     */
    async getRecommendArticle() {
        const {ctx} = this
        const cateList = await ctx.model.Article.aggregate([{$group:{ _id: "$articleCate"}}]).sort({"articleCate":1})
        let respList = []
        if(cateList && Array.isArray(cateList)){
            for(let i=0;i<cateList.length;i++){
                let tObj = {}
                const item = cateList[i]
                const articleCateId = item._id;
                const data = await ctx.model.Article.find({articleCate:articleCateId}).sort({"created":-1}).limit(3)
                tObj.data = data;
                tObj.articleCateId = articleCateId
                if(articleCateId == 1){
                    tObj.articleCateName = "FrontEnd"
                }else if(articleCateId == 2){
                    tObj.articleCateName = "BackEnd "
                }else if(articleCateId == 3){
                    tObj.articleCateName = "Interesting Things"
                }
                respList.push(tObj)
            }
        }
        ctx.body = this.success(respList.reverse())
    } 
    /**获取最新blog */
    async getMyRecommendArticle() {
        const {ctx} = this
        let resp = null;
        resp = await ctx.model.Article.find({isMyRecommend:true}).limit(1)
        if(!resp || !resp[0]){
            resp = await ctx.model.Article.find().sort({"created":-1}).limit(1)
        }
        ctx.body = this.success(resp)
    }
    /**获取某类文章数据 */
    async getCateArticle(){
        const {ctx} = this
        const {articleCateId,pageIndex=0,pageSize=9,tag=""} = ctx.request.query
        let filter = {
            articleCate:articleCateId,
        }
        if(tag!=""){
            filter = {
                ...filter,
                articleTags:{$all:[tag]}
            }
        }
        const resp = await ctx.model.Article.find(filter,{created:-1}).limit(parseInt(+pageSize)).skip(pageIndex*pageSize).sort({"updated": -1})
        ctx.body = this.success(resp)
    }
    /**
     * 获取近期文章 5 篇
     */
    async getLatestFive(){
        const {ctx} = this
        const resp = await ctx.model.Article.find().sort({"created":-1}).limit(10)
        ctx.body = this.success(resp)
    }

    /**
     * app blog 端 搜索查询
     */
    async getSearchList() {
        const {ctx} = this
        const {searchKey,pageSize=10,pageIndex=0} = ctx.request.query
        const filterModel = {}
        const reg = {$regex:searchKey}
        const t = [{content:reg},{articleDesc:reg},{articleTitle:reg}]
        filterModel.$or = t
        const count = await ctx.model.Article.find(filterModel).count()
        // const resp = await ctx.model.Article.find(filterModel).limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        const resp = await ctx.model.Article.find(filterModel)
        ctx.body = this.success(resp,null,{total:count})
    }
    /**
     * 修改个人推荐文章
     */
    async switchRecommendArticle (){
        const {ctx} = this
        const {newState,articleId} = ctx.request.body
        if(newState){
            (await ctx.model.Article.find()).forEach(async (item)=>{
                await ctx.model.Article.updateOne({_id:item._id},{isMyRecommend:false})
            })
        }
        await ctx.model.Article.updateOne({_id:articleId},{isMyRecommend:newState})
        ctx.body = this.success()
    }
}
module.exports = ArticleController;
