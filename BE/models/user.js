const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 6,
            max: 20,
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
        avatar: {
            type: String
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
