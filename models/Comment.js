const express = require('express');
const mongoose = require('mongoose');
const Comment = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    photo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
module.exports=mongoose.model('Comment',Comment);