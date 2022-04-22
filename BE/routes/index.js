const express = require('express')
const router = express.Router()
const auth = require('./auth')
const user = require('./user')
const post = require('./post')
const voucher = require('./voucher')
router.use('/auth', auth)
router.use('/user', user)
router.use('/post', post)
router.use('/voucher', voucher)
module.exports = router