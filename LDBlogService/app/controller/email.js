'use strict';

const BaseController = require("./BaseController")
const nodemail = require('nodemailer')
const path = require("path")

class EmailController extends BaseController {
    async sendEmail() {
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
        // 获取当前时间
        let sendTime = Date.now();
        // 填写发件人, 收件人
        let mailOptions = {
            // 发件人地址
            from: 'lmy15973914530@163.com',
            // 收件人列表, 向163邮箱, gmail邮箱, qq邮箱各发一封
            to: 'lmy15973914530@163.com',
            // 邮件主题
            subject: '用nodemailer发出的邮件~',
            // 文字内容
            text: '发送附件内容',
            // html内容
            html: '<b>发送时间:' + sendTime + '</b>',
            // 附件内容 是一个列表, 第一个是目录下的pack.json文件, 第二是御坂美琴的头像, 第三是作者在拍的图片的zip包
            // attachments: [{
            //     filename: 'package.json',
            //     path: path.resolve(__dirname, 'package.json')
            // }, {
            //     filename: 'bilibili.jpg',
            //     path: path.resolve(__dirname, 'bilibili.jpg')
            // }, {
            //     filename: 'room.zip',
            //     path: path.resolve(__dirname, 'room.zip')
            // }],
        };
        
        // 发送邮件
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("邮件发送成功~");
        });
        this.ctx.body = this.success()
    }
}

module.exports = EmailController;