const express = require('express')
const router = express.Router()

const task = require('../controllers/taskController')
router.get('/add', task.createTask)
router.get('/home', task.showTasks)

module.exports = router