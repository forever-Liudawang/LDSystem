'use strict';

const BaseController = require("./BaseController")
const nodemail = require('nodemailer')
const moment = require("moment")
class EmailController extends BaseController {
    async sendEmail() {
        const {ctx} = this
        const {toEmail,replayInfo,replayId} = ctx.request.body
        const transport = nodemail.createTransport({
            host: 'smtp.163.com', // 调用qq服务器
            secureConnection: true, // 启动SSL
            port: 465, // 端口就是465
            secure: true,
            auth: {
                user: 'lmy15973914530@163.com', // 账号
                pass: 'JDNBQQWWXNQFRZHL', // 授权码,
            }
        })
        // 填写发件人, 收件人
        let mailOptions = {
            // 发件人地址
            from: 'lmy15973914530@163.com',
            // 收件人列表, 向163邮箱, gmail邮箱, qq邮箱各发一封
            to: toEmail,
            // 邮件主题
            subject: '来自LDBlog的邮件回复',
            // 文字内容
            text: replayInfo,
            // html内容
            // html: '<b>发送时间:' + sendTime + '</b>',
        };
        
        // 发送邮件
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                this.ctx.body = this.error(error.message)
                return
            }
        });
        await ctx.model.Email.updateOne({_id:replayId},{replayStatus:true})
        this.ctx.body = this.success()
    }
    async insert() {
        const {ctx} = this
        const emailModal = ctx.request.body
        await ctx.model.Email.create(emailModal)
        ctx.body = this.success()
    }
    async getList() {
        const {ctx} = this
        const {publishTime,searchKey,pageSize=10,pageIndex=0} = ctx.request.query
        const filterModel = {}
        let filterTime = {}
        if(searchKey!= ""){
            const reg = {$regex:searchKey}
            const t = [{info:reg},{emailAddress:reg}]
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
        const count = await ctx.model.Email.find(filterModel).find(filterTime).count()
        const resp = await ctx.model.Email.find(filterModel).find(filterTime).limit(parseInt(pageSize)).skip(pageIndex*pageSize)
        ctx.body = this.success(resp,null,{total:count})
    }
}

module.exports = EmailController;