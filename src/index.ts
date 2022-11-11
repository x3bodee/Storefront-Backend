import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import api from './routes/index';

const app: express.Application = express();
const { PORT } = process.env;
app.use(bodyParser.json());

app.use('/api', api);



app.listen(process.env.PORT, function () {
    console.log(`app running on port: ${PORT}`);
})
