const {Schema,model} = require("mongoose");

const UserSchema =new Schema({
    name:{type:String},
    surname:{type:String},
    email:{type:String,unique:true,required:true},
    nikName:{type:String},
    tel:{type:Number},
    password:{type:String,required:true},
    
   
})

module.exports = model('User', UserSchema);