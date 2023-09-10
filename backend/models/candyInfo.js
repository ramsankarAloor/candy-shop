const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CandyInfo = sequelize.define('candyInfo', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    candyName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING
    },
    price : {
        type : Sequelize.STRING,
        allowNull : false
    },
    quantity : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
})

module.exports = CandyInfo;