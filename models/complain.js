const mongoose = require("mongoose");

//Creating complaint Schema
complainSchema = new mongoose.Schema({
	student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
	title: String,
	body: String,
	date: { type: Date, default: Date.now}
}, { timestamps: true })

// modelling schema
const complain = mongoose.model('complaint', complainSchema)
module.exports = complain