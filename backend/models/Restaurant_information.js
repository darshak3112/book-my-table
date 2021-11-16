const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant_informationSchema = new Schema({
    Mobile_no: {
        type: mongoose.Schema.Types.Mobile_no,
        ref: 'vendor'
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
    Time: {
        type: Timestamp,
        require: true
    },
    Contact: {
        type: String,
        require:true
    },
    Facility:{
        type:String,
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