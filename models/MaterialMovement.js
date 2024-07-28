const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Material = require('./Material');
const Movement = require('./Movement');

const MaterialMovement = sequelize.define('MaterialMovement', {
  material_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Material,
      key: 'id'
    }
  },
  movement_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movement,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

Material.hasMany(MaterialMovement, { foreignKey: 'material_id' });
Movement.hasMany(MaterialMovement, { foreignKey: 'movement_id' });
MaterialMovement.belongsTo(Material, { foreignKey: 'material_id' });
MaterialMovement.belongsTo(Movement, { foreignKey: 'movement_id' });

module.exports = MaterialMovement;