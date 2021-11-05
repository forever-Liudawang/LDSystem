module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleTagSchema = new Schema({
        articleCateId:{
            type:String,
            required:true
        },
        articleTagName:{
            type: String,
            default:"",
            required:true

        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("ArticleTag",ArticleTagSchema,"articleTages")
}