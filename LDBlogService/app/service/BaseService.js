const Service = require("egg").Service
class UserService extends Service {
    success(data,msg){
        return {
            success: true,
            message:msg || "成功",
            data
        }
    }
    error(msg){
        return {
            success:false,
            message:msg || "失败",
            data:null
        }
    }
}
module.exports =  UserService