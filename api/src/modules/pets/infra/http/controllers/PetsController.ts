import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePetsService from '@modules/pets/services/CreatePetsService';
import ListAllPetsService from '@modules/pets/services/ListAllPetsService';
import ListPetsByCityService from '@modules/pets/services/ListPetsByCityService';
import UpdatePetService from '@modules/pets/services/UpdatePetService';
import DeletePetService from '@modules/pets/services/DeletePetService';

class PetsController {
  public async listByCity(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { city } = request.params;

    const listPets = container.resolve(ListPetsByCityService);

    const pets = await listPets.execute(city);

    return response.json(pets);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listPets = container.resolve(ListAllPetsService);

    const pets = await listPets.execute();

    return response.json(pets);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createPet = container.resolve(CreatePetsService);

    const { name, race, age, weight, city, user_id } = request.body;

    const pet = await createPet.execute({
      name,
      race,
      age,
      weight,
      city,
      user_id,
    });

    return response.json(pet);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, race, age, weight, city, user_id } = request.body;

    const updateService = container.resolve(UpdatePetService);

    const pet = await updateService.execute({
      id,
      name,
      race,
      age,
      weight,
      city,
      user_id,
    });

    return response.json(pet);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeletePetService);

    const pet = await deleteService.execute(id);

    return response.json(pet);
  }
}

export default PetsController;
