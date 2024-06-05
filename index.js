const express = require("express");
const categories = require('./data/category');
const products = require('./data/products')

const app = express();
const PORT = 8001;

app.get('/categories', (req, res) => {
    return res.json(categories);
})

app.get('/products', (req, res) => {
    return res.json(products);
})

app.listen(PORT);


