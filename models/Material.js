const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Material = sequelize.define('Material', {
  nombre: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: { // Cambia 'description' a 'descripcion'
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: { // Coincide con la columna de la base de datos
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: { // Coincide con la columna de la base de datos
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: true, // Esto asegura que Sequelize use las columnas 'createdAt' y 'updatedAt' automáticamente
});

module.exports = Material;