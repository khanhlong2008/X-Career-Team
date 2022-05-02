const mongoose = require('mongoose')

const BillSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    product: [
        { type: Object, }
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

module.exports = mongoose.model("Bill", BillSchema)