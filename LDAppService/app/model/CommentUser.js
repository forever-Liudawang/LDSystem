module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const CommentUserSchema = new Schema({
        commentId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        userlikeArr:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("CommentUser",CommentUserSchema,"commentUsers")
}