import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';

app.use(compress());
app.use(cors());

const app = express();

app.use(hlmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline"],
        imgSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
}));
app.use(helmet.referrerPolicy({ policy: 'same-origin'}));

// app.get('/', function (reg, res, next) {

//     console.log('first function');
//     next();
// }, function (reg, res) {

//     console.log('second function');
//     res.send('Hello Worls!');
// });

const root = path.join(__dirname, '../../');

app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (reg, res) => {

    res.sendFile(path.join(root, 'dist/client/index.html'));
});



app.listen(8000, () => console.log('listening on port 8000!'));
