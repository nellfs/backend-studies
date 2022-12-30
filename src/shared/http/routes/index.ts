import productsRouter from '@modules/products/routes/products.routes';
import AppError from '@shared/errors/AppError';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req: Request, res: Response) => {
  throw new AppError('test', 404);
});

export default routes;
