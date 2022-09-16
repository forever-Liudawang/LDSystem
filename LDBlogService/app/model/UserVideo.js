module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserVideoSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        likeVideoList:{
            type:Array,
            default:[]
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("UserVideo",UserVideoSchema,"uservideoes")
}