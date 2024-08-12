const { Sequelize } = require('sequelize');
require('dotenv').config();  // Cargar variables de entorno desde .env

// Conectar usando la DATABASE_URL desde las variables de entorno
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Necesario si Render requiere conexiones SSL
    }
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;