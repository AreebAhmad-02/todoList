
import express from 'express';
import bodyParser from 'body-parser';
import connection from './database/db.js';

import Routes from './routes/routes.js';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);
const PORT = 8000;

connection();

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })

