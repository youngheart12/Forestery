const express=require('express');
const UserMessageModel=require('../../Model/UserMessageModel');
const User=require('../../Model/userModel');
const NormalUser=require('../../Model/normalUser');
const path=require('path');
const Admin=require('../../Model/adminModel');
const router=express.Router();
const multer=require('multer');

const storage = multer.diskStorage({
    destination: "./uploadsNew/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
//admin was sending messsage
router.post('/adminnotify',(req,res)=>{
    const {region,pincode,statement,priority}=req.body;
    
    const newMessage=new UserMessageModel({
        
        region,
        pincode,
        statement,
        priority
    });
    if(pincode)
    {
        User.findOne({pincode}).then((user)=>{
            if(!user)
            {
                return res.send({
                    "emessage":"no user found"
                })
            }
            user.message.push(newMessage);
            user.save().then((r)=>{
                res.send(r);
            })
        }).catch((e)=>res.send(e));
    }
    
});



//normal user will be sending data



router.post('/usernotify',function(req,res){
   const {name,email,phone,describe,observe,lat,lon}=req.body;
  const newNormalUser=new NormalUser({
      name,email,phone,describe,observe,lat,lon
  });
 
  newNormalUser.save().then((t)=>{
Admin.findById("5da2f86e3427a227a01fee14").then((admin)=>{
    if(!admin)
    return res.status(404).send("no user found");
    admin.normaluserMessage.push(newNormalUser);
    admin.save().then((t)=>res.send(t));
})
  });
})


//populating admin user 
router.get('/getNotifyAdmin',(req,res)=>{
    Admin.findById("5da2da75eb6ec119884ff7a0").populate("normaluserMessage").exec((err,admin)=>{
        res.send(admin.normaluserMessage);
    })
    })

module.exports=router;