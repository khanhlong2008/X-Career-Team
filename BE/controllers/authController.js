const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let refreshTokens = [];

const authController = {
    registerUser: async (req, res) => {
        try {
            console.log("hello register")
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            //Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });
            const user = await newUser.save()
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin
            },
            "secretkey",
            { expiresIn: "30s" }
        )
    },
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
            },
            "secretkey",
            { expiresIn: "7d" }
        );
    },
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                res.status(404).json("Incorrect username")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                res.status(404).json("Incorrect password")
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                refreshTokens.push(refreshToken)
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                // save all - password
                const { password, ...others } = user._doc;
                res.setHeader('token', accessToken)
                res.status(200).json({ ...others });
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //refreshToken 
    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        jwt.verify(refreshToken, "secretkey", (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //create new access token, refresh token and send to user
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken)
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            })
            res.setHeader('token', newAccessToken)
            res.status(200).json("successfully");

            // res.status(200).json({
            //     accessToken: newAccessToken,
            //     refreshToken: newRefreshToken,
            // })
        })
    },
    //LOG OUT
    logOut: async (req, res) => {
        //Clear cookies when user logs out
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        res.clearCookie("refreshToken");
        res.status(200).json("Logged out successfully!");
    },
}


module.exports = authController