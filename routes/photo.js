const express = require('express');
const mongoose = require('mongoose');
const Photo = require('../models/Photo');
const router = express.Router();

router.route('/')
.get((req,res,next)=>{
    Photo.find({})
    .then((photo)=>{
        res.statusCode=200;
        res.json(photo);
        
    })

})
.post((req, res, next) => {
    Photo.create(req.body)
        .then((post) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.send("Access denied!!!");
})
.delete((req,res,next)=>{
    Photo.deleteMany({})
    .then((reply)=>{
        res.statusCode=200;
        res.json(reply);

    })
});
module.exports=router;

