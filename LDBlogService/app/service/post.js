const BaseService = require("./BaseService.js")
class PostService extends BaseService {
    //_id: this.app.mongoose.Types.ObjectId(id)
    async insert(Post){
        const {ctx,logger} = this
        const res = await ctx.model.Post.create(Post)
        const postId = res._id
        await ctx.model.PostUser.create({postId})
        return res;
    }
}
module.exports = PostService