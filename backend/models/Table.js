const mongoose = require('mongoose');
const { Schema } = mongoose;


const TableSchema = new Schema({

    Table: [{
        Restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurent_information'
        },
        Table_No: {
            type: Integer,
            require: true
        },
        TimeZone: [{
            Time: {
                type: String,
                require: true
            },
            Available: {
                type: Boolean,
                require: true,
                default: false
            }
        }]

    }]

});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;