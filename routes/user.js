const express = require("express");
const userSchema = require("../model/user");
const User = require('../model/user');
const router = express.Router();

// create user
router.post("/", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => {
            // Only send response inside the promise chain
            res.json(data);
        })
        .catch((error) => {
            // Handle error and send response
            res.status(500).json({ message: error.message });
        });
});

router.post('/verify-password', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.json({ isValid: false });
        }
        const isValidPassword = await user.comparePassword(password);
        res.json({ isValid: isValidPassword });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;