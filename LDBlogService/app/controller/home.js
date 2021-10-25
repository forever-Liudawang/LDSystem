'use strict';

const BaseController  = require("./BaseController")
class HomeController extends BaseController {
    // async uploadFile(){
    //     const { ctx,logger,config} = this;
    //     const stream = await ctx.getFileStream()
    //     const filename = new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase();
    //     const target = path.join(this.config.baseDir, 'app/public', filename);
    //     const writeStream = fs.createWriteStream(target);
    //     const baseURl = config.$baseURL
    //     try {
    //         stream.pipe(writeStream)
    //         ctx.body = this.success(baseURl + '/static/' + filename);
    //     } catch (err) {
    //         //如果出现错误，关闭管道
    //         await sendToWormhole(stream);
    //         throw err;
    //     }
    //   }
    async index(){
        this.ctx.body = 123
    }
}

module.exports = HomeController;
