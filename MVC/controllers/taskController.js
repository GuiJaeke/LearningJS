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
    static async removeTask(req, res) {
        const id = req.body.id

        await task.destroy({where: {id: id} })
        res.redirect('/tasks/home')
    }
    static async endTask(req, res) {
        const id = req.body.finid
        const Task = {
            done: req.body.done === '0' ? true : false,
        }
        await task.update(Task, {where: {id: id} })
        res.redirect('/tasks/home')
    }
    static async showTasks(req, res) {
        const tasks = await task.findAll({raw: true})
        res.render('tasks/all', { tasks })
    }
}