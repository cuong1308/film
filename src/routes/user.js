const express = require('express')
const router = express.Router()
const authorization = require('../app/controllers/Middleware')

const userController = require("../app/controllers/UserController") 

router.post('/update',  userController.update)
router.get('/edit',  userController.edit)
router.get('/info',  userController.info)


module.exports = router