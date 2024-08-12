const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Software rodando na porta 3000')
} catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

exports.default = sequelize