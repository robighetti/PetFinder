import { Router } from 'express';

import userRouter from '@modules/users/infra/http/routes/users.routes';
import petsRouter from '@modules/pets/infra/http/routes/pets.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/pets', petsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
