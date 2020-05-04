//initialize the connection from sequelize  to Mysgl server

import sequelize, { Sequelize } from 'sequelize';

const sequelize = new Sequelize('graphbook-dev',  'devuser', 'PASSWORD', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default sequelize;