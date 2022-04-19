const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, "secretkey", (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You're not authenticated");
    }
}
const verifyTokenAndUserAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user.id, req.params.id)
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You're not allowed to do that!");
        }
    });
}
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You're not allowed to do that!");
        }
    });
}








module.exports = { verifyTokenAndUserAuthorization, verifyTokenAndAdmin, verifyToken }

