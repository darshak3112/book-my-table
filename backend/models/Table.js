const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant_informationSchema = new Schema({
    Restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent_information'
    },
    NumOfTable: {
        type: Int32,
        require: true
    },
    TimeZone: {
        
    }
    
});

const Restaurant_information = mongoose.model('Restaurant_information', Restaurant_informationSchema);
module.exports = Restaurant_information;