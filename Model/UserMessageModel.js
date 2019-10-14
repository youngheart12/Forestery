const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const newMessageSchema=new Schema({
        region:{
            type:String,
            require:true
        },
        pincode:{
            type:Number,
            require:true
        },
        priority:{
            type:String,
            require:true
        },
        statement:{
            type:String,
            require:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
})
const UserMessage=mongoose.model('usermessage',newMessageSchema);
module.exports=UserMessage;