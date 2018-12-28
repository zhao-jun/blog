const Sequelize = require('sequelize');
const { dbConfig } = require('./');

module.exports = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    dialectOptions: {
      charset: 'utf8mb4',
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    // pool: {
    //   max: 5, // default: 5
    //   min: 0, // default: 0
    //   acquire: 10000, // default: 10000
    //   idle: 10000 // default: 10000
    // },
    timezone: dbConfig.timezone //东八时区
  }
);
