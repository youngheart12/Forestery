const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const AdminSchema=new Schema({
  normaluserMessage:[{
      type:Schema.Types.ObjectId,
      ref:'normaluser'
  }]
});
const Admin=mongoose.model('admin',AdminSchema);
module.exports=Admin;