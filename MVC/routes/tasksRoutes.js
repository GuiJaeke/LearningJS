const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
router.get('/add', taskController.createTask)
router.post('/add', taskController.createTaskInsert)
router.post('/all', taskController.removeTask)
router.post('/update', taskController.endTask)
router.get('/home', taskController.showTasks)

module.exports = router