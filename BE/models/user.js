const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 6,
            max: 20,
            unique: true,
        },
        phone: {
            type: String,
            require: true,
            max: 12,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        address: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
