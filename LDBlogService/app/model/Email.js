module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const EmailSchema = new Schema({
        emailAddress:{
            type:String,
            unique:true,
            required:true
        },
        info:{
            type:String,
        },
        replayStatus:{
            type:Boolean,
            default:false
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("Email",EmailSchema,"emailes")
}