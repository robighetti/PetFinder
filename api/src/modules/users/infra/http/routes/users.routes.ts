import { Router } from 'express';
import multer from 'multer';

import Authenticate from '../middlewares/Authenticate';
import uploadConfig from '../../../../../configs/upload';

import CreateUserService from '../../../services/CreateUserService';
import UpdateUserAvatarService from '../../../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password, address } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    street: address.street,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  Authenticate,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      fileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

usersRouter.put('/', Authenticate, async (resquest, response) => {
  return response.json({ ok: 'put' });
});

export default usersRouter;
