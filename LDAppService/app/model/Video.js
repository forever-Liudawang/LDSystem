module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const VideoSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        videoUrl:{
            type:String,
            required:true
        },
        desc:{
            type:String,
        },
        likeNum:{
            type:Number,
            default:0
        },
        commentNum:{
            type:Number,
            default:0
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("Video",VideoSchema,"videoes")
}