module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleDraftSchema = new Schema({
        userName:{
            type:String,
            default:"Andy"
        },
        content:{
            type:String,
        },
        coverImg:{
            type:String,
        },
        articleCate:{
            type:String,
        },
        articleDesc:{
            type:String
        },
        articleTitle:{
            type:String
        },
        articleTags:{
            type:Array,
            default:[]
        },
        isMyRecommend:{
            type:Boolean,
            default:false
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("ArticleDraft",ArticleDraftSchema,"articleDrafts")
}