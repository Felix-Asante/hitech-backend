const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");
const { createNewCategory, getAllCategory, deleteCategory } =
	categoryController;

router.post("/", createNewCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);
module.exports = router;
