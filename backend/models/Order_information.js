const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order_informationSchema = new Schema({
    Mobile_no: {
        type: mongoose.Schema.Types.Mobile_no,
        ref: 'user'
    },
    Members: {
        type: Int32,
        require: true
    },
    PrePayment: {
        type: Int32,
        require: true,
    },
    Time: {
        type: Timestamp,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const Order_information = mongoose.model('order_information', Order_informationSchema);
module.exports = Order_information;