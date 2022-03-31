const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant_informationSchema = new Schema({
    Vendor: {
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
    Area: { //landmark
        type: String,
        require: true
    },
    FoodType: { //veg , non-veg ,both
        type: String,
        require: true
    },
    FoodCategory: { //punjabi ,italian ,gujarati ,etc......
        type: String,
        require: true
    },
    Address: {
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
        require: true
    },
    Facility: {
        type: String,
        require: true
    },
    Holiday: {
        type: String,
        require: true
    },
    Active: {
        type: Boolean,
        default: false
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Table_require: {
        type: Number,
        require: true,
    }
});

const Restaurant_information = mongoose.model('Restaurant_information', Restaurant_informationSchema);
module.exports = Restaurant_information;