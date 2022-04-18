const Post = require('../models/post')

const postController = {
    getAllNews: async (req, res) => {
        try {
            const posts = await Post.find()
            return res.status(200).json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getPostbyID: async (req, res) => {
        try {
            console.log('hello getbyid')
            const { id } = req.params
            const post = await Post.findById(id)
            return res.status(200).json(post)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    createPost: async (req, res) => {
        try {
            const newPost = req.body
            const post = new Post(newPost)
            await post.save()
            return res.status(200).json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updatePost: async (req, res) => {
        try {
            const { id } = req.params
            const { title, content, author, attachment, likeCount } = req.body
            const newPost = {
                title,
                content,
                author,
                attachment,
                likeCount
            }
            const foundPost = await Post.findByIdAndUpdate(id, newPost)
            return res.status(200).json({ success: true })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deletePost: async (req, res) => {
        try {
            const { id } = req.params
            await Post.findOneAndDelete(id)
            return res.status(200).json("Post delete")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = postController