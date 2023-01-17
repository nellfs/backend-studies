import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/products/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes;
