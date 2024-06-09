const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;



