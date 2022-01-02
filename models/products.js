const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
	productName: String,
	productPhotos: [{ String }],
	description: String,
	categoryId: { type: Schema.Types.ObjectId, ref: "Categories" },
	weight: String,
	price: String,
	quantity: String,
	dateCreated: Date,
});

module.exports = mongoose.model("Product", productSchema);
