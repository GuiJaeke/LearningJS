const express = require('express');
const { engine } = require('express-handlebars'); // Importando o engine da forma correta

const app = express();

// Configuração do motor de visualização Handlebars
app.engine('handlebars', engine()); // Usando engine() em vez de exphbs()
app.set('view engine', 'handlebars');

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
    res.render('dashboard')
})

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});