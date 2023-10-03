const mongoose = require('mongoose')

const archiveSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
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