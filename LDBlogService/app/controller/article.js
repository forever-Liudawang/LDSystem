'use strict';

const BaseController  = require("./BaseController")
class ArticleController extends BaseController {
    async index(){
        this.ctx.body = 123
    }
    
    async createArtice() {
        const {ctx} = this
        const articleModel = ctx.request.body
        const resp = await ctx.model.Article.create(articleModel)
        ctx.body = this.success()
    }
    async getArticleById() {
        const {ctx} = this
        const {artcileId} = ctx.request.query
        const resp = await ctx.model.Article.find({_id: artcileId})
        ctx.body = this.success(resp)
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
