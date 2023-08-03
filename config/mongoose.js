// import the mongoose folder
const mongoose = require('mongoose');

// open mongoose default connection for MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db');

// defult connection for mongoDB
const connection =mongoose.connection;

// handle the error if occur during connection
connection.on('error', console.error.bind(console, 'connection error'));

// handle connection open event and show messeage for successfully connect to DB
connection.once('open', ()=>{
    console.log('Successfully connect to database 😊😊😊');
});