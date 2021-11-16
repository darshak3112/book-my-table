const mongoose = require('mongoose');
const { Schema } = mongoose;

const RatOrdHol_infoSchema = new Schema({
    ResName: {
        type: mongoose.Schema.Types.Contact,
        ref:'restaurant_information'
    },
    Rating: {
        type: Decimal128,
        require: true
    },
    Order: {
        type: Int32,
        require: true,
    },
    Holiday_details: {
        type: String,
        require: true
    }   
});

const RatOrdHol_info = mongoose.model('RatOrdHol_info', RatOrdHol_infoSchema);
module.exports = RatOrdHol_info;