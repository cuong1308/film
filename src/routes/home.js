const express = require('express')
const router = express.Router()
const authorization = require('../app/controllers/Middleware')

const homeController = require("../app/controllers/HomeController") 

router.get('/',  homeController.index)


module.exports = router