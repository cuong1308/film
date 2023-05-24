const express = require('express')
const router = express.Router()

const authController = require("../app/controllers/AuthController") 

router.get('/logout', authController.logout)
router.get('/signin', authController.signin)
router.get('/signup', authController.signup)
router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router