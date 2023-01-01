import 'express-async-errors';
import express from 'express';
import 'reflect-metadata';
import cors from 'cors';

import '../typeorm';
import { errorMiddleware } from 'src/middlewares/error';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use(errorMiddleware);
app.listen(4444, () => {
  console.log('✨ Server started on port 4444! ✨');
});
