module.exports = (app)=>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        userName:{
            type:String,
            unique:true,
            required:true
        },
        passWord:{
            type:String
        },
        avatar:{
            type:String
        },
        sign:{
            type:String
        }
    },{
        timestamps:{createdAt: 'created', updatedAt: 'updated'}
    })
    return mongoose.model("User",UserSchema,"users")
}