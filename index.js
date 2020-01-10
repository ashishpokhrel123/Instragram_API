const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const userRouter = require('./routes/user');
const uploadRouter = require('./routes/upload');
const photoRouter = require('./routes/photo');
const auth = require('./auth');
const dotenv = require('dotenv').config();
const url = 'mongodb://localhost:27017/Instragram';
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex:true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

    app.use('/users',userRouter);

    //app.use(auth.verifyUser);
    app.use('/photo',photoRouter);
    app.use('/upload',uploadRouter);
 
  
    // app.use((err, req, res, next) => {
    //     console.error(err.stack);
    //     res.statusCode = 500;
    //     res.json({ message: err.message });
    // });
app.listen(PORT, () => {
    console.log(`App is running at localhost:${PORT}`);
});
