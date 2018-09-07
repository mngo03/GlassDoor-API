const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

/* const db = "mongodb://localhost:27017/db_name";

mongoose.connect(db, err => {
    if(err) {
        console.log("Error: "+ err)
    } else {
        console.log("Connected to mongodb")
    }
}) */

console.log("Listening to port: " + port);