const express = require('express')
const router = express.Router()

const mentorController = require('../controllers/mentorController')

router.get('/mentors', mentorController.data)
router.get('/mentors/:id', mentorController.index)
router.post('/mentors', mentorController.store)
router.put('/mentors/:id', mentorController.update)
router.delete('/mentors/:id', mentorController.delete)

module.exports = router
