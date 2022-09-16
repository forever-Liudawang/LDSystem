module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CommentSchema = new Schema({
        postId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        userId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        isReplay:{
            type:Boolean,
            default:false
        },
        commentId:{
            type:Schema.Types.ObjectId || null
        },
        content:{
            type:String,
            unique:true,
            required:true
        },
        avatar:{
            type:String,
            unique:true,
            required:true
        },
        nickName:{
            type:String,
            unique:true,
            required:true
        },
        replayNum:{
            type:Number,
            default:0
        },
        light:{
            type:Number,
            default:0
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("Comment",CommentSchema,"commentes")
}