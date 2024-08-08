const { DataTypes } = require('sequelize')

const db = require('../BD/conn')

const user = require('./User')

const address = db.define('address', {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

user.hasMany(address)
address.belongsTo(user)

module.exports = address