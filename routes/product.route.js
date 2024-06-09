const express = require('express');
const { createProducts, getProducts, getProduct, updateProduct, deleteProduct } = require('../controller/product.controller.js');
const router = express.Router();

// Create a product
router.post('/', createProducts);

// Get all products
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProduct);

// Update a product by ID
router.put('/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
module.exports = router;


