const authController = require('../controllers/authController');
const router = require('express').Router();

router.post('/resgister', authController.registerUser)
router.post('/login', authController.loginUser)
router.post("/logout", authController.logOut)
router.post("/refresh", authController.requestRefreshToken);

module.exports = router
