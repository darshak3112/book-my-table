const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    Admin: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
