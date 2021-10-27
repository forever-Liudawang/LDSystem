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
        console.log('articleModel :>> ', articleModel);
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
        this.logger.info(articleCate,publishTime,searchKey)
        const filterModel = {}
        if(articleCate != 0){
            filterModel.articleCate = articleCate
        }else if(searchKey!= ""){
            const reg = {$regex:searchKey}
            const t = [{content:reg},{articleDesc:reg},{articleTitle:reg}]
            filterModel.$or = t
        }
        this.logger.info(filterModel)
        const resp = await ctx.model.Article.find(filterModel).limit(pageSize).skip(pageIndex*pageSize)
        ctx.body = this.success(resp)
    }
}

module.exports = ArticleController;
