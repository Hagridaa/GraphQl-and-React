import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import servicesLoader from './services';
import db from './database';
const utils = {
    db,
};
const services = servicesLoader(utils);
const root = path.join(__dirname, '../../');
const app = express();


if(process.env.NODE_ENV === 'production') {
    app.use(helmet());
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'", 'backend:8000'],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "*.amazonaws.com"]
        }
    }));
    app.use(compress());
    app.use(cors());
}
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

const serviceNames = Object.keys(services);

    for (let i = 0; i < serviceNames.length; i += 1) {
        const name = serviceNames[i];
        if (name === 'graphql') {
            services[name].applyMiddleware ({ app });
        }

        else {
            app.use(`./${name}`, services[name]);
        }
    }


// app.get('/', function (reg, res, next) {

//     console.log('first function');
//     next();
// }, function (reg, res) {

//     console.log('second function');
//     res.send('Hello Worls!');
// });


app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (reg, res) => {

    res.sendFile(path.join(root, 'dist/client/index.html'));
});



app.listen(8000, () => console.log('🚀 listening on port 8000!'));
