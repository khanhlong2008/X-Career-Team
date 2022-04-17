const userController = require('../controllers/userController')
const { verifyToken } = require('../Middlewares/verifyToken')

const router = require('express').Router();

router.get('/', verifyToken, userController.getAllUser)
router.get('/:id', userController.getUserbyID)

module.exports = router