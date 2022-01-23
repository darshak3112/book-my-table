const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    date: {
        type: String
    }
});

const Upload = mongoose.model('images', uploadSchema);

module.exports = Upload;