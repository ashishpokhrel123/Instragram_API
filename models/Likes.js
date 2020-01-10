const express = require('express');
const mongoose = require('mongoose');
const Likes = new mongoose.Schema({
    likes:{
        type:Number,
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    photo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Photo'
    }

},{timestamps:true});
module.exports=mongoose.model('Likes',likes);