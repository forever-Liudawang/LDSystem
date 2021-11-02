'use strict';

const BaseController  = require("./BaseController")
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
     * 模糊查询 $regex
     */
    async getArticleList() {
        const {ctx} = this
        const {articleCate=0,publishTime,searchKey,pageSize=10,pageIndex=0} = ctx.request.query
        const filterModel = {}
        if(articleCate != 0){
            filterModel.articleCate = articleCate
        }else if(searchKey!= ""){
            const reg = {$regex:searchKey}
            const t = [{content:reg},{articleDesc:reg},{articleTitle:reg}]
            filterModel.$or = t
        }
        const count = await ctx.model.Article.count()
        const resp = await ctx.model.Article.find(filterModel).limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        ctx.body = this.success(resp,null,{total:count})
    }
    /**
     * 获取首页三个分类文章数据
     */
    async getRecommendArticle() {
        const {ctx} = this
        // const resp = await ctx.model.Article.find().sort({"created":-1})
        const cateList = await ctx.model.Article.aggregate([{$group:{ _id: "$articleCate"}}]);
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
                    tObj.articleCateName = "前端技术"
                }else if(articleCateId == 2){
                    tObj.articleCateName = "后端技术"
                }else if(articleCateId == 3){
                    tObj.articleCateName = "生活随笔"
                }
                respList.push(tObj)
            }
        }
        ctx.body = this.success(respList)
    } 
    /**获取最新blog */
    async getLatestArticle() {
        const {ctx} = this
        const resp = await ctx.model.Article.find().sort({"created":-1}).limit(1)
        ctx.body = this.success(resp)
    }
    /**获取某类文章数据 */
    async getCateArticle(){
        const {ctx} = this
        const {articleCateId,pageIndex=0,pageSize=9} = ctx.request.query
        const resp = await ctx.model.Article.find({articleCate:articleCateId}).limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        ctx.body = this.success(resp)
    }
}
module.exports = ArticleController;
