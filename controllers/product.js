const Product = require("../models/products");

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

module.exports = {
	createNewProduct,
};
