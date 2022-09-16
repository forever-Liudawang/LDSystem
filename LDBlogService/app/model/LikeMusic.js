module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const LikeMusicSchema = new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            unique:true,
            required:true
        },
        musicLikeList:{
            type:Array,
            default:[]
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("LikeMusic",LikeMusicSchema,"likeMusices")
}