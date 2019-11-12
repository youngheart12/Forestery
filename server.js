const express=require('express');
const config=require('config');
const mongoose=require('mongoose');
const path=require('path');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use('/uploadsNew',express.static('uploadsNew'))

const db=config.get("mongodbURL");
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>console.log("mongodb connected")).catch((e)=>console.log(e));


app.use('/api',require('./API/Auth/auth'))


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
module.exports=app;