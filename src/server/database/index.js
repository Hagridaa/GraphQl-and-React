//initialize the connection from sequelize to Mysql server

import Sequelize from 'sequelize';
import configFile from '../config/';
import models from '../models';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
    models: models(sequelize), // reads the created models to db
    sequelize,
};

export default db;