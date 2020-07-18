import { Router } from 'express';
import multer from 'multer';

import Authenticate from '../middlewares/Authenticate';
import uploadConfig from '@configs/upload';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  Authenticate,
  upload.single('avatar'),
  userAvatarController.update,
);

usersRouter.put('/', Authenticate, usersController.update);

export default usersRouter;
