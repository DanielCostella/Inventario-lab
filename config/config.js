const { Sequelize } = require('sequelize');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    username: "postgres",
    password: "Depocapo25",
    database: "lab_inventory",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false,
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    },
  },
};

let sequelize;
if (env === 'production' || env === 'test') {
  sequelize = new Sequelize(config[env].url, config[env]);
} else {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: config.development.dialect
    }
  );
}

module.exports = sequelize;