const mongoose = require("mongoose");

//Creating message Schema
memoSchema = new mongoose.Schema({
	type: String,
	title: String,
	head: String,
	body: String,
	footer:{
		type: String,
		default: "Signed by:\n\tRector,\n\tDeputy rector,\n\tRegistrar,\n\tBursar,\n\tLibrarian"
	},
	file: {
		name: String,
		type: String,
		data: Buffer
	},
	date: { type: Date, default: Date.now}
}, { timestamps: true })

// modelling schema
const memo = mongoose.model('Memo', memoSchema)
module.exports = memo
