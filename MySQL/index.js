const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql')
const app = express()

app.use(
    express.urlencoded({
            extended: true
        })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/home', (req, res) =>{
    res.render('home')
})

app.post('/book/insert', (req, res) => {
    const title = req.body.title
    const page = req.body.page
    const sql = `INSERT INTO BOOKS (TITLE, PAGE) VALUES ('${title}', '${page}')`

    conn.query(sql, function(err){
        if (err) {
            console.log(err)
        }
        
        res.redirect('/home')
    })
})

app.get('/books', (req, res) =>{
    const sql2 = `SELECT * FROM books;`

    conn.query(sql2, function(err, data) {

        if (err) {
            console.log(err)
            return
        }
        const books = data

        console.log(books)
        res.render('books', { books })
    })
})
app.post('/search', (req, res) =>{
    const livro1 = req.body.num

    const sql3 = `SELECT * FROM books WHERE ID = '${livro1}';`

    conn.query(sql3, function(err, data) {

        if (err) {
            console.log(err)
            return
        }
        const book = data

        console.log(book)
        res.render('pesquisa', { book })
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BD'
})

app.use(function(req, res, next){
    res.status(404).render(`404`)
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log("Conectou ao MySQL!")
    app.listen(3000)
    console.log("sistema rodando na porta 3000!")
})