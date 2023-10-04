const mongoose = require("mongoose");

//Creating message Schema
memoSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
	title: String,
	head: String,
	body: String,
	footer:{
		type: String,
		default: "Signed by:\n\tRector,\n\tDeputy rector,\n\tRegistrar,\n\tBursar,\n\tLibrarian"
	},
	fieldname: String,
	filename: String,
	encoding: String,
	mimetype: String,
	data: Buffer,

	date: { type: Date, default: Date.now}
}, { timestamps: true })

// modelling schema
const memo = mongoose.model('Memo', memoSchema)
module.exports = memo
