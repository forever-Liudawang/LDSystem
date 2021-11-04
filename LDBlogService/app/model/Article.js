module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = new Schema({
        userName:{
            type:String,
            default:"Andy"
        },
        content:{
            type:String,
            required: true
        },
        coverImg:{
            type:String,
        },
        articleCate:{
            type:String,
            required:true
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
    return mongoose.model("Article",ArticleSchema,"articles")
}