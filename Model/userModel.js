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
    pincode:{
        type:Number,
        require:true,
    },
    message:[{
        type:Schema.Types.ObjectId,
        ref:'usermessage'
    }]
});
const User=mongoose.model('user',userSchema);
module.exports=User;