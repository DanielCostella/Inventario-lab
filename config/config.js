const { Sequelize } = require('sequelize');
require('dotenv').config();  // Cargar variables de entorno desde .env

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: isProduction
    ? { ssl: { require: true, rejectUnauthorized: false } } // Para producción
    : {} // Sin SSL para desarrollo
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

  module.exports = sequelize;