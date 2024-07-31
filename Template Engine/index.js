const express = require('express');
const { engine } = require('express-handlebars'); // Importando o engine da forma correta

const app = express();


// Configuração do motor de visualização Handlebars
app.engine('handlebars', engine()); // Usando engine() em vez de exphbs()
app.set('view engine', 'handlebars');

app.use(express.static('public'))

// Rota para a página inicial
app.get('/home', (req, res) => {
    const user = {
        user: "dedeu",
        sobrenome: "gaydré",
        age: 15
    }
    const palavra = 'teste'

    const auth = true

    res.render('home', {user: user, palavra, auth});
});

app.get('/dashboard', (req, res)=>{
    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) =>{
    const post = {
        title: 'aprender ser o Alan Turing',
        category: 'javascript',
        body: 'este artigo é um tchupreks and um tchuprrey',
        comments: 4
    }




    res.render('blogpost', {post})

}
    )

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});