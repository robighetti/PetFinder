import { Router } from 'express';

import Authenticate from '@modules/users/infra/http/middlewares/Authenticate';

import PetsController from '../controllers/PetsController';

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.get('/', petsController.listAll);

petsRouter.get('/:city', Authenticate, petsController.listByCity);

petsRouter.post('/', Authenticate, petsController.create);

petsRouter.put('/:id', Authenticate, petsController.update);

petsRouter.delete('/:id', Authenticate, petsController.delete);

export default petsRouter;
