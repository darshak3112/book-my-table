const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant_informationSchema = new Schema({
    Vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    Rest_Name: {
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
        default:false,
        require:true
    },
    Food_type:{
        type:String, // veg , non-veg ,both
        require:true
    },
    Active:{
        type:Boolean,
        default:false
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Table_require:{
        type:Number,
        require:true,
    }
});

const Restaurant_information = mongoose.model('Restaurant_information', Restaurant_informationSchema);
module.exports = Restaurant_information;