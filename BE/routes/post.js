const postController = require('../controllers/postController')
const { verifyToken, verifyTokenAndAdmin } = require('../Middlewares/verifyToken')
const router = require('express-promise-router')()

router.route('/')
    .get(verifyToken, postController.getAllNews)
    .post(verifyTokenAndAdmin, postController.createPost)
router.route('/:id')
    .get(verifyToken, postController.getPostbyID)
    .put(verifyTokenAndAdmin, postController.updatePost)
    .delete(verifyTokenAndAdmin, postController.deletePost)

module.exports = router