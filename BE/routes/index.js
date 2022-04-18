const express = require('express');
const auth = require('./auth')
const user = require('./user')
const router = express.Router()
const post = require('./post')
router.use('/auth', auth)
router.use('/user', user)
router.use('/post', post)
module.exports = router