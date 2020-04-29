const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const instaSchema=new Schema({
  
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
   
  
});
const Insta=mongoose.model('insta',instaSchema);
module.exports=Insta;