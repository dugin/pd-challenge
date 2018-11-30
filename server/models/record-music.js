const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const RecordMusic = sequelize.define('record-music', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = RecordMusic;
