import winston from 'winston';

//loggign paggage for node.js
//transport 1 errors, transport 2 all other messages such as warnings. 

let transports = [
    new winston.transports.File({
        filename: 'error.log',
        level: 'error',
    }),
    new winston.transports.File({
        filename: 'combined.log',
        level: 'verbose',
    }),
];

if (process.env.NODE_ENV !== 'production') {
    transports.push(new winston.transports.Console());
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports,
});

export default logger;