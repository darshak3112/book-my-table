const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://darshak:darshak@cls-bmt.ofl0d.mongodb.net/BookMyTable"

const connetToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongo successfully");
    })
}

module.exports = connetToMongo;
