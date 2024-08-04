require('dotenv').config();
const sequelize = require('../config/config');
const Material = require('../models/Material');

const materials = [
  { nombre: 'Etanol', descripcion: 'Descripción del etanol', stock: 100 },
  { nombre: 'Acetona', descripcion: 'Descripción de la acetona', stock: 50 },
  { nombre: 'Toluenos', descripcion: 'Descripción de los toluenos', stock: 200 },
  { nombre: 'Metanol', descripcion: 'Descripción del metanol', stock: 150 }
];

const initMaterials = async () => {
  try {
    // Deshabilitar restricciones de clave externa
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    await sequelize.sync({ force: true }); // Esto borrará y creará las tablas de nuevo
    await Material.bulkCreate(materials);

    // Habilitar restricciones de clave externa
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Materiales iniciales agregados a la base de datos.');
    process.exit(0);
  } catch (error) {
    console.error('Error al agregar materiales iniciales:', error);

    // Asegurarse de re-habilitar restricciones de clave externa si hay un error
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    process.exit(1);
  }
};

initMaterials();