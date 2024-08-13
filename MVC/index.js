const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const conn = require('./bd/conn')
const task = require('./models/task')
const taskRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRoutes)

app.use(function(req, res, next){
    res.status(404).render(`404`)
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))