const express = require('express')
const router = express.Router()

const movieController = require('../app/controllers/MovieController')

router.get('/create', movieController.create)
router.post('/store', movieController.store)
router.get('/edit/:id', movieController.edit)
router.put('/:id', movieController.update)
router.delete('/:id', movieController.delete)
router.get('/show', movieController.show)

module.exports = router