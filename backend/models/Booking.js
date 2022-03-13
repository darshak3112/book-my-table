const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    Restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent_information'
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table'
    },
    Mobile_no_user: {
        type: String,
        require: true,
    },
    Mobile_no_guest: {
        type: String,
        require: true,
    },
    Guest_Total: {
        type: String,
        require: true
    },
    Guest_Number: {
        type: String,
        require: true
    },
    Request: {
        type: String,
        default: null
    },
    Date: {
        type: String,
        require: true
    },
    Time: {
        type: String,
        require: true
    }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;