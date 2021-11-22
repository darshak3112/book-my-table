const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant_informationSchema = new Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    Name: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true,
    },
    Area: {
        type: String,
        require: true
    },
    TimeOpen: {
        type: String,
        require: true
    },
    TimeClose: {
        type: String,
        require: true
    },
    Contact: {
        type: String,
        require:true
    },
    Facility:{
        type:String,
        default:false,
        require:true
    },
    Status:{
        type:Boolean,
        require:true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const Restaurant_information = mongoose.model('Restaurant_information', Restaurant_informationSchema);
module.exports = Restaurant_information;