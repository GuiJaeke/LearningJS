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
    res.render('home', { alert: 'Livro cadastrado no Banco de dados' })
})

app.post('/book/insert', (req, res) => {
    const title = req.body.title
    const page = req.body.pagess
    const sql = `UPDATE INTO BOOKS (TITLE, PAGE) VALUES ('${title}', '${page}')`
 
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
    const id = req.body.num

    const sql3 = `SELECT * FROM books WHERE ID = '${id}';`

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
app.get('/edit/:id', (req, res) =>{
    const id = req.params.id

    const sql4 = `SELECT * FROM books WHERE ID = '${id}';`

    conn.query(sql4, function(err, data) {

        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        res.render('editbook', { book })
    })
})
app.post('/edit/post', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const page = req.body.page
    const sql = `UPDATE books SET TITLE = '${title}', PAGE = '${page}' WHERE ID = ${id}`
 
    conn.query(sql, function(err){
        if (err) {
            console.log(err)
        }
        
        res.redirect('/books')
    })
})
app.post('/delete/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM books WHERE ID = ${id}`
 
    conn.query(sql, function(err){
        if (err) {
            console.log(err)
        }
        
        res.redirect('/books')
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
