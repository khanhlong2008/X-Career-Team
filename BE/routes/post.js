const postController = require('../controllers/postController')
const { verifyToken, verifyTokenAndAdmin } = require('../Middlewares/verifyToken')
const router = require('express-promise-router')()

router.route('/')
    .get(postController.getAllNews)
    .post(verifyTokenAndAdmin, postController.createPost)
router.route('/:id')
    .get(postController.getPostbyID)
    .put(verifyTokenAndAdmin, postController.updatePost)
    .delete(verifyTokenAndAdmin, postController.deletePost)

module.exports = router