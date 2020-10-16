require('dotenv').config({ path: '.env' });

const environment = process.env.NODE_ENV || 'development';
const envConfigPath = `./env/${environment}`;
const routes = require('./routes').getRoutes();
const socketIo = require('./socket-io');
const defaultConf = require('./default');
const envConfig = require(envConfigPath);

module.exports = { ...defaultConf, ...envConfig, routes, socketIo };
