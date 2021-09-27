module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const LikeMusic = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
        likeMusicList:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("LikeMusic",LikeMusic,"likemusics")
}