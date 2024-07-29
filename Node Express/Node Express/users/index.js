const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

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
router.get('/add', (req, res) => {
    
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
    console.log(req.body)

})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('buscando ID')
    res.sendFile(`${basePath}/USERS.html`)
})

module.exports = router