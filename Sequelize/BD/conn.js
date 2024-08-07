const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('BD2', 'root', '', {
    host: '192.168.3.53:3306',
    dialect: 'mysql'
})

try {
    sequelize.authenticate
} catch(err) {
    console.log('Não foi possível acessar o Banco')
}

module.exports = sequelize