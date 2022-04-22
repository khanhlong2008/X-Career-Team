const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    product: [
        {
            key: {
                type: String,
                require: true,
            },
            title: {
                type: String,
                require: true,
            },
            discount: {
                typeof: Number,
                default: 0
            },
            category: {
                type: Array
            },
            price_options: {
                type: Object,
            },
        }
    ],
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
}, { timestamps: true })