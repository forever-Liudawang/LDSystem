module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserPostSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        postIdlikeArr:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("UserPost",UserPostSchema,"userpostes")
}