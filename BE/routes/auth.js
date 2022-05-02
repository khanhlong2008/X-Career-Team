const authController = require('../controllers/authController');
const router = require('express-promise-router')()
const validator = require('../Middlewares/validation')
const passport = require('passport')
const passportConfig = require('../Middlewares/passport')

router.route('/resgister')
    .post(validator.validateBody(validator.schemas.userRegisterSchema),
    authController.registerUser)
router.route('/login')
    .post(validator.validateBody(validator.schemas.userLoginSchema),
        authController.loginUser)
router.route("/logout")
    .post(authController.logOut)
router.route('/refresh')
    .post(authController.requestRefreshToken);
router.route('/google')
    .post(passport.authenticate('google-plus-token', { session: false }),
        authController.authGoogle)
module.exports = router
