import { injectable, inject } from 'tsyringe';

import Pet from '@modules/pets/infra/typeorm/entities/Pet';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';

@injectable()
class ListAllPetsService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute(): Promise<Pet[] | undefined> {
    const pets = await this.petsRepository.listAllPets();

    return pets;
  }
}

export default ListAllPetsService;
