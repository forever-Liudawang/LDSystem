module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserFollowSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        followArr:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("UserFollow",UserFollowSchema,"userfollowes")
}