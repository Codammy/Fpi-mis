const mongoose = require("mongoose");

//Creating student Schema
studentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	matric_no: {
		type: String,
		required: true,
		unique: true,
		uppercase: true
	},
	password: {
		type: String,
		required: true,
		minlenght: 6,
		default: '1234567'
	},
	img: {data: Buffer},
	date: { type: Date, default: Date.now}
}, {timestamps: true})

// modelling schema
const student = mongoose.model('Student', studentSchema)
module.exports = student
