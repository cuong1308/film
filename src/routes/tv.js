const express = require('express')
const router = express.Router()

const tvController = require("../app/controllers/TvController") 

router.get('/detail', tvController.detail)
router.get('/watch', tvController.watch)


module.exports = router