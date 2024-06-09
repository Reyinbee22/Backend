const pModel = require('../models/productModels.js');

// Helps to create a product
const createProducts = async (req, res) => {
    try {
        const { productName, productQuantity, productPrice } = req.body;

        if (!productName || !productQuantity || !productPrice) {
            // Status code Response
            return res.status(400).send({
                message: 'All fields must be filled, please check again'
            });
        }

        const userProductDetails = await pModel.create(req.body);
        res.status(200).json(userProductDetails);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Helps to get all the products
const getProducts = async (req, res) => {
    try {
        const products = await pModel.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Helps to get a single product
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Helps to update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productIdentity = await pModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!productIdentity) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(productIdentity);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

// Helps to delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productIdentity = await pModel.findByIdAndDelete(id);

        if (!productIdentity) {
            return res.status(404).json({ message: 'Unable to delete, Product not found' });
        }

        res.status(200).json({ message: 'Product Deleted Successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}
