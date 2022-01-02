const Category = require("../models/categories");
const createNewCategory = (req, res) => {
	const { category } = req.body;

	const newCategory = new Category({ name: category });
	newCategory.save((err) => {
		if (err) {
			// throw err;
			console.log("error", err);
			res.status(404).json({ response: err });
		} else {
			res.status(200).json({ response: "new category created" });
		}
	});
};
// ! GET ALL CATEGORIES
const getAllCategory = async (req, res) => {
	try {
		const data = await Category.find({});
		res.status(200).json({ data: data });
	} catch (err) {
		res.status(401).json({ data: "Failed to fetch data" });
	}
};

const deleteCategory = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Category.deleteOne({ _id: id });
		res.status(200).json({ message: "item deleted" });
	} catch (err) {
		res.status(404).json({ message: "An error occurred" });
	}
};
module.exports = {
	createNewCategory,
	getAllCategory,
	deleteCategory,
};
