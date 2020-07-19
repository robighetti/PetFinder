import { injectable, inject } from 'tsyringe';

import Pet from '@modules/pets/infra/typeorm/entities/Pet';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';

@injectable()
class ListPetsByCityService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute(city: string): Promise<Pet[] | undefined> {
    const pets = await this.petsRepository.listPetsByCity(city);

    return pets;
  }
}

export default ListPetsByCityService;
