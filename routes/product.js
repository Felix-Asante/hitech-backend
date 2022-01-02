const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const { createNewProduct } = productController;

router.post("/", createNewProduct);
router.get("/", (req, res) => {
	res.send("test");
});

module.exports = router;
