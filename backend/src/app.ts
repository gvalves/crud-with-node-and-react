import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { portfolioRouter } from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(portfolioRouter);

export { app };
