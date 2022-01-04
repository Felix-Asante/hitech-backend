const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const { createNewProduct, getAllProducts, getProductById } = productController;

router.post("/", createNewProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
