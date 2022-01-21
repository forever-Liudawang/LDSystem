'use strict';

const BaseController = require("./BaseController")
class ArticleTagController extends BaseController {
  async getTags(){
    const {ctx} = this
    const resp = await ctx.model.ArticleTag.find()
    ctx.body = this.success(resp)
  }
  async inertTag(){
      const {ctx} = this
      const tagModel = ctx.request.body
      const resp = await ctx.model.ArticleTag.create(tagModel)
      ctx.body = this.success(resp)
  }
  async deleteTag(){
    const {ctx} = this
    const {tagId} = ctx.request.body
    const resp = await ctx.model.ArticleTag.deleteOne({_id:tagId})
    ctx.body = this.success(resp)
}
}

module.exports = ArticleTagController;
