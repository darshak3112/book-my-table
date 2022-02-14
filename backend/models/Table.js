const mongoose = require('mongoose');
const { Schema } = mongoose;


const TableSchema = new Schema({
    Restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurent_information'
    },
    Person : {
        type: Number,
        require: true
    }
    
});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;