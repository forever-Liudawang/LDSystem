const BaseService = require("./BaseService.js")
class UserService extends BaseService {
    //_id: this.app.mongoose.Types.ObjectId(id)
    async insert(User){
        const {ctx,logger} = this
        const res = await ctx.model.User.create(User)
        const userId = res._id
        await ctx.model.UserPost.create({userId})
        return res;
    }
    async getUser(){
        const {ctx} = this
        const res = await ctx.model.User.find()
        return res;
    }
    async login(userModel){
        const {userName,passWord} = userModel
        const user = await this.ctx.model.User.find({userName})
        if(user.length<=0){
            return this.error("账号或密码错误")
        }else{
            const u = user[0]
            if(u.passWord != passWord){
                return this.error("账号或密码错误")
            }else{
                return this.success(u,"登陆成功")
            }
        }
    }
}
module.exports = UserService