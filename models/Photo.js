const express = require('express');
const mongoose = require('mongoose');
const Photo = new mongoose.Schema({
  
    title:{
        type:String
        
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:''
    },
    user:{
       type:String
        

    },
    love:{
        type:Number
    }
   
   
},{timestamps:true});
module.exports = mongoose.model('Photo',Photo);