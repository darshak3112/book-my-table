const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
    resname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent_information'
    },
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;