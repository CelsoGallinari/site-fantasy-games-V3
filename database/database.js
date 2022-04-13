const Sequelize = require("sequelize");

const connection = new Sequelize('fantasygames', 'root', '102030ju',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection