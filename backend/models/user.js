const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	date:{
		type: Date,
		required: false
	},
	Age:{
		type: String,
		required: false
	},
	Batch:{
		type: String,
		required: false
	},
	Wallet:
	{
		type: Number,
		required : false,
		default : 30
	}
});

module.exports = User = mongoose.model("Users", UserSchema);
