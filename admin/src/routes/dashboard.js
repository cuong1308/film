const express = require('express')
const router = express.Router()

const dbController = require("../app/controllers/DbController") 

router.get('/', dbController.index)

module.exports = router