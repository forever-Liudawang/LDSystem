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
    async GetArticleListByCateId() {
        const {ctx} = this
        const {articleCateId} = ctx.request.query
        const resp = await ctx.model.Article.find({articleCate: articleCateId})
        ctx.body = this.success(resp)
    }
}

module.exports = ArticleController;
