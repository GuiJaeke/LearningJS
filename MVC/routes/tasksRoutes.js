const express = require('express')
const router = express.Router()

const task = require('../controllers/taskController')
const taskController = require('../controllers/taskController')
router.get('/add', task.createTask)
router.post('/add', taskController.createTaskInsert)
router.get('/home', task.showTasks)

module.exports = router