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

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))