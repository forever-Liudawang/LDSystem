module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const PostSchema = new Schema({
        title:{
            type:String,
            required:true
        },
        cateId:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        media:{
            type:Schema.Types.Mixed,
        },
        userId:{
            type:Schema.Types.ObjectId,
            required:true,
        },
        light:{
            type:Number,
            default:0
        },
        avatar:{
            type:String
        },
        userName:{
            type:String
        },
        commentNum:{
            type:Number,
            default:0,
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("Post",PostSchema,"postes")
}