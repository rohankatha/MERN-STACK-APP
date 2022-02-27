const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
let Bbcapp = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        type: Number
    },
    VegorNonveg: {
        type: String
    },
    vendor: {
        type: String
    },
    count: {
        type: Number
    }
},opts);

module.exports = mongoose.model('Bbcapp', Bbcapp);