const mongoose = require('mongoose');
const { Schema } = mongoose;


const TableSchema = new Schema({
    Restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent_information'
    },
    Table_No: {
        type: Number,
        require: true
    },
    Active: {
        type: Boolean,
        default:true,
        require: true
    }
});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;