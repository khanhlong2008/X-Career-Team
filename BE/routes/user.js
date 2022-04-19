const userController = require('../controllers/userController')
const router = require('express-promise-router')()
const { verifyTokenAndAdmin, verifyTokenAndUserAuthorization } = require('../Middlewares/verifyToken')
const validator = require('../Middlewares/validation')

router.route('/')
    .get(verifyTokenAndAdmin,
        userController.getAllUser)
    .post(verifyTokenAndAdmin,
        validator.validateBody(validator.schemas.userSchema),
        userController.newUser)

router.route('/:id')
    .get(validator.validateParam(validator.schemas.idSchema, 'id'),
        userController.getUserbyID)
    .delete(
        verifyTokenAndAdmin,
        validator.validateParam(validator.schemas.idSchema, 'id'),
        userController.deleteUser)
    .put(validator.validateParam(validator.schemas.idSchema, 'id'),
        validator.validateBody(validator.schemas.userOptionalSchema),
        userController.updateUser)




module.exports = router