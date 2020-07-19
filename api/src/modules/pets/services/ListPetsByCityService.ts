import { injectable, inject } from 'tsyringe';

import IPetListAllDTO from '@modules/pets/dtos/IPetListAllDTO';
import IPetsRepository from '@modules/pets/repositories/IPetsRepository';

@injectable()
class ListPetsByCityService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute(city: string): Promise<IPetListAllDTO[] | undefined> {
    const pets = await this.petsRepository.listPetsByCity(city);

    return pets;
  }
}

export default ListPetsByCityService;
