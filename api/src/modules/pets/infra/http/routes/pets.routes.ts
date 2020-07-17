import { Router } from 'express';

const petsRouter = Router();

petsRouter.get('/', (request, response) => {
  return response.send();
});

export default petsRouter;
