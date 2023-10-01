const mongoose = require("mongoose");

//Creating complaint Schema
complainSchema = new mongoose.Schema({
	user: String,
	title: String,
	body: String,
	date: { type: Date, default: Date.now}
}, { timestamps: true })

// modelling schema
const complain = mongoose.model('complaint', complainSchema)
module.exports = complain
