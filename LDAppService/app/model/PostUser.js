module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const PostUserSchema = new Schema({
        postId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        userIdlikeArr:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("PostUser",PostUserSchema,"postuseres")
}