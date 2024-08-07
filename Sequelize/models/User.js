const { DataTypes } = require('sequelize')

const db = require('../BD/conn')


const user = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = user