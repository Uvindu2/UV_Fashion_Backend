const express = require("express");
const productSchema = require("../model/product");
const { throws } = require("assert");
const Product = require('../model/product'); 
const router = express.Router();


router.post("/", (req, res) => {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
});


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        if(!products) throw Error('No items');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



module.exports = router;