const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    ResName: {
        type: mongoose.Schema.Types.Contact,
        ref: 'restaurant_information',
        require: true
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

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
