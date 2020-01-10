const express = require('express');
const mongoose = require('mongoose');
const user = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,

    },
    phone:{
        type:String,

    },
    username:{

    },
    password:{
        type:String,

    },
    image:{
        type:String
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'

    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Likes'
    }]

},{timestamps:true});
module.exports= mongoose.model('User',user);

