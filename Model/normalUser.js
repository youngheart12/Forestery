const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const NormalUserSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
   observe:{
       type:String,
       require:true
   },
   describe:{
       type:String,
       require:true
   },
    createdAt:{
        type:Date,
        default:Date.now
    }
  
});
const NormalUser=mongoose.model('normaluser',NormalUserSchema);
module.exports=NormalUser;