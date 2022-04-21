const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 6,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            require: true,
            max: 12,
            unique: true,
        },
        password: {
            type: String,
            min: 6,
        },
        auhtGoogleID: {
            type: String,
            default: null
        },
        auhtFacebookID: {
            type: String,
            default: null
        },
        authType: {
            type: String,
            enum: ['local', 'google', 'facebook'],
            default: 'local'
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
