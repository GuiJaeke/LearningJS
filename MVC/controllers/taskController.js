const task = require('../models/task')

module.exports = class taskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }
    static async createTaskInsert(req, res) {
        const Task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await task.create(Task)
        res.redirect('/tasks/home')
    }
    static async showTasks(req, res) {
        const tasks = await task.findAll({raw: true})
        res.render('tasks/all', { tasks })
    }
}