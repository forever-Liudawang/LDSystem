module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const DemoSchema = new Schema({
        title:{
            type:String,
        },
        link:{
            type:String,
            required: true
        },
        desc:{
            type:String,
        },
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("Demo",DemoSchema,"demoes")
}