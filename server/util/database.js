const Sequelize = require('sequelize');

const sequelize = new Sequelize('pd-challenge', 'root', '12345678', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
