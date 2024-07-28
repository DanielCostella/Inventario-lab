const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Movement = sequelize.define('Movement', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Movement;