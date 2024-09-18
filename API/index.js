const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extende: true,
    }),
)

app.use(express.json())

// rotas - endpoint
app.post('/create', (req, res) =>{
    const name= req.body.name
    const preco = req.body.preco

    if (!name) {
        return res.status(422).json({message: 'o campo nome é obrigatorio'})
    }

    console.log(name);
    console.log(preco);
    res.status(201).json({message: `primeiro post criada caraio ${name} ${preco}`})
})


app.get('/', (req, res) =>{
    res.status(200).json({message: 'primeira rota criada caraio'})
})
app.listen(3000)