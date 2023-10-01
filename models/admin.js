const mongoose = require("mongoose");

//Creating admin Schema
adminSchema = new mongoose.Schema({
	name: { type: String, required: true},
	id_no: { type: String, required: true},
	password: {
		type: String,
		required: true,
		minlength: 6,
		default: '0000000'
	},
	date: { type: Date, default: Date.now }
}, { timestamps: true })
const admin = mongoose.model('Admin', adminSchema)
module.exports = admin
