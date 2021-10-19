module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const VideoUserSchema = new Schema({
        videoId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        likeUserList:{
            type:Array,
            default:[]
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("VideoUser",VideoUserSchema,"videouseres")
}