const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	vendor: {
		type: String,
		required: true
	},
	time:{
		type: String,
		required: false
	},
    status: {
        type: String,
        default: 'PLACED'
    },
    rating:{
		type: String,
		required: false
	},
    quantity:{
		type: Number,
		required: false
	},
    cost:{
    
		type: Number,
		required: false
	},




});

module.exports = Order = mongoose.model("Orders", OrderSchema);