const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importing the router
const productRoute = require('./routes/product.route.js');

app.use(process.env.APP_PRODUCT_ROUTE_URL, productRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
        console.log('CONNECTED SUCCESSFULLY...!');
    })
    .catch((error) => {
        console.log('Connection Failed...', error);
    });


