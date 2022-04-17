const authController = require('../controllers/authController');
const router = require('express').Router();
const validator = require('../Middlewares/validation')

router.post('/resgister',
    validator.validateBody(validator.schemas.userRegisterSchema),
    authController.registerUser)
router.post('/login',
    validator.validateBody(validator.schemas.userLoginSchema),
    authController.loginUser)
router.post("/logout", authController.logOut)
router.post("/refresh", authController.requestRefreshToken);

module.exports = router
