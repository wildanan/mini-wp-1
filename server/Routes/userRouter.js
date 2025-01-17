const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('/signup', userController.create)
router.post('/signin', userController.login)


module.exports = router