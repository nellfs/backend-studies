import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import '../typeorm';
import { errorMiddleware } from 'src/middlewares/error';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

app.listen(4444, () => {
  console.log('✨ Server started on port 4444! ✨');
});
