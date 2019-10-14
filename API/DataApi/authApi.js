const express=require('express');
const router=express.Router();
const data=[{temp:"14.5",desc:"hot",wind:"63"},
    {temp:"48.5",desc:"hot",wind:"4"},
    {temp:"87.5",desc:"rain",wind:"10"},
    {temp:"20.5",desc:"hottest",wind:"36"},
    {temp:"99.5",desc:"clean",wind:"87"},
    {temp:"45.5",desc:"warm",wind:"12"}]
  
router.get('/apidata',(req,res)=>{
    const newadata=data;
   var marvel=newadata.filter(function(hero){
       return hero.desc =="rain"
   })
   var marvel1=newadata.filter(function(hero){
    return (hero.temp>90)
})
   if(marvel)
   {
       res.send({
           "message":"No chances of fire",
           "percent":"2"

       })
   }else if(marvel1){
       
      
           res.send({
               "message":"Higher risk of fire",
               "percent":"99"
           })
    
   }else{
       res.send({
           "message":"Everything is Good"
       })
   }
});
module.exports=router;