import { Router } from 'express';
import UsersController from '@modules/users/controllers/UsersController';
import { Joi, Segments, celebrate } from 'celebrate';
import isAuthenticated from 'src/middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
