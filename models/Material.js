const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Material = sequelize.define('Material', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
  timestamps: true,
});

module.exports = Material;