const Product = require("../models/products");

const createNewProduct = async (req, res) => {
	const { data } = req.body;
	try {
		const result = await Product.save({ ...data });
		console.log(result);
		res.status(200).json({ message: "Product created" });
	} catch (err) {
		res.status(404).json({ message: "An error occurred" });
	}
};

module.exports = {
	createNewProduct,
};
