const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    lat:{
        type:Number,
        require:true
    },
    lon:{
        type:Number,
        require:true
    }

  
});
const User=mongoose.model('user',userSchema);
module.exports=User;