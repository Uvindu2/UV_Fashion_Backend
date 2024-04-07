const express = require("express");
const cartSchema = require("../model/cart");
const { throws } = require("assert");
const Cart = require('../model/cart'); 
const cart = require("../model/cart");
const router = express.Router();


router.post("/", (req, res) => {
    const cart = cartSchema(req.body);
cart        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
});

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log("Received userId:", userId);
    Cart.find({ userId: userId })
        .then((carts) => {
            if (carts.length > 0) {
                res.json(carts);
            } else {
                res.status(404).json({ message: "Carts not found for this user" });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
});

module.exports = router;