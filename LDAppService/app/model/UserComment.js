module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserCommentSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        commentIdlikeArr:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("UserComment",UserCommentSchema,"userCommentes")
}