const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    },
    colour: {
        type: String,
        required: true

    }

});

module.exports = mongoose.model('Cart', cartSchema);
