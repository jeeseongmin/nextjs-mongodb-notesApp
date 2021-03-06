const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please add a title"],
		unique: true,
		trim: true,
		maxLength: [40, "Title cannot be more than 40 characters"],
	},
	description: {
		type: String,
		required: true,
		maxLength: [200, "Description cannot be more than 200 characters"],
	},
	writer: {
		type: String,
		required: true,
		maxLength: [100],
	},
});

module.exports = mongoose.models.Node || mongoose.model("Post", PostSchema);
