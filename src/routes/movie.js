const express = require('express')
const router = express.Router()

const movieController = require("../app/controllers/MovieController") 

router.get('/detail', movieController.detail)
router.get('/watch', movieController.watch)
router.get('/collection', movieController.collection)


module.exports = router