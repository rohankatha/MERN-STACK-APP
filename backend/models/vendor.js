const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: false
	},
	Vendorname: {
		type: String,
		required: false
	},
	Contact:{
		type: String,
		required: false
	},
	Openingtime: {
		type: String,
		required: false
	},
	Closingtime:{
		type: String,
		required: false
	},
	
	
	
});

module.exports = User = mongoose.model("Vendors", VendorSchema);