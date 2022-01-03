const Product = require("../models/products");

// !CREATE NEW PRODUCT
const createNewProduct = (req, res) => {
	const newProduct = new Product({ ...req.body });

	newProduct.save((err) => {
		if (err) {
			res
				.status(400)
				.json({ message: "An error occurred while adding product" });
		} else {
			res.status(200).json({ message: "Product created" });
		}
	});

	// res.status(401).json({ message: "An error occurred while adding product" });
};
// ! GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		// console.log(products);
		res.status(200).json({ data: products });
	} catch (err) {
		res.status(400).json({ data: "Failed to fetch data" });
	}
};
module.exports = {
	createNewProduct,
	getAllProducts,
};
