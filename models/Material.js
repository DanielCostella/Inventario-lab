const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Importa la instancia de Sequelize

const Material = sequelize.define('Material', {
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
  },
  lastUpdated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: true, // Asegura que createdAt y updatedAt se manejen automáticamente
});

module.exports = Material;