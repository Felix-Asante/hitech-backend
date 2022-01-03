const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const { createNewProduct, getAllProducts } = productController;

router.post("/", createNewProduct);
router.get("/", getAllProducts);

module.exports = router;
