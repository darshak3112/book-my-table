const mongoose = require('mongoose');
const { Schema } = mongoose;

const RatOrdHol_infoSchema = new Schema({
    ResName: {
        type: mongoose.Schema.Types.Contact,
        ref:'Restaurant_information'
    },
    Rating: {
        type: Decimal128,
        require: true
    },
    Order: {
        type: Int32,
        require: true,
    }
});

const RatOrdHol_info = mongoose.model('RatOrdHol_info', RatOrdHol_infoSchema);
module.exports = RatOrdHol_info;