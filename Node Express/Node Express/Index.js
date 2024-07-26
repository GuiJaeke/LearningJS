const express = require('express')
const app = express()
const port = 3000 
const path = require('path')

const basePath = path.join(__dirname, 'templates')

// const checkAuth = function (req, res, next) {
//     req.authStatus = false

//     if (req.authStatus) {
//         console.log('funcionário')
//         next()
//     } else {
//         console.log('indefinido')
//         next()
//     }
// }

// app.use(checkAuth)

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log('buscando ID')
    res.sendFile(`${basePath}/USERS.html`)
})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log('porta 3000 funcionando')
})

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {


})