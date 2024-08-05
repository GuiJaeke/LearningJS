const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql')
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log("Conectou ao MySQL!")
    app.listen(3000)
    console.log("sistema rodando na porta 3000!")
})