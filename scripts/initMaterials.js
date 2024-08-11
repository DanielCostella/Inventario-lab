const sequelize = require('../config/config');
const Material = require('../models/Material');

const initMaterials = async () => {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea todas las tablas
    console.log('Base de datos sincronizada');

    const materials = [
      { nombre: 'Etanol', descripcion: 'Descripción del etanol', stock: 100 },
      { nombre: 'Acetona', descripcion: 'Descripción de la acetona', stock: 50 },
      { nombre: 'Toluenos', descripcion: 'Descripción de los toluenos', stock: 200 },
      { nombre: 'Metanol', descripcion: 'Descripción del metanol', stock: 150 },
    ];

    for (const material of materials) {
      await Material.create(material);
    }

    console.log('Materiales iniciales agregados a la base de datos.');
  } catch (error) {
    console.error('Error al agregar materiales iniciales:', error);
  }
};

initMaterials();