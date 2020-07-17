import { Router } from 'express';

const petsRouter = Router();

petsRouter.get('/', (request, response) => {
  try {
    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default petsRouter;
