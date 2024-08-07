const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./BD/conn')
const user = require('./models/User')
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

app.get('/home', async (req, res) =>{
    const users = await user.findAll({raw: true})
    console.log(users)
    res.render('home', { users: users })
})
app.get('/user/:id', async (req, res) => {
    const id = req.params.id

    const User = await user.findOne({ raw: true, where: { id: id } })
    
    console.log(User)
    res.render('userview', { User })
})
app.get('/edit/:id', async (req, res) => {
    const id = req.params.id

    const User = await user.findOne({ raw: true, where: { id: id } })
    
    console.log(User)
    res.render('edit', { User })
})
app.get('/users/create', (req, res) =>{
    res.render('cadUser')
})
app.post('/users/create', async (req, res) =>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }
    console.log(req.body)
    await user.create({name, occupation, newsletter})
    res.redirect('/home')

}) 
app.post('/delete/:id', async (req, res) => {
    const id = req.params.id

    await user.destroy({where: { id: id } })
    
    res.redirect('/home')
})


app.use(function(req, res, next){
    res.status(404).render(`404`)
})
console.log("Conectou ao MySQL!")
console.log("sistema rodando na porta 3000!")

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => {console.log(err)})