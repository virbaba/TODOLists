// import the express package
const express = require('express');

// import path package for get the path of directory
const path = require('path');


// defining the port
const port = 1001;

// import mongoose file for connection to DB
const db = require('./config/mongoose');

// creating express application
const app = express();

// listing for connection 
app.listen(port, (err)=>{
    if(err){
        console.log('Error Occur during listen for connection in index.js');
        return;
    }

    console.log(`Listen On: ${port}`);

})