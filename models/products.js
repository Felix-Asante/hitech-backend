const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
	productName: String,
	productPhotos: [],
	description: String,
	categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
	weight: String,
	price: String,
	quantity: String,
	dateCreated: Date,
});

module.exports = mongoose.model("Product", productSchema);
