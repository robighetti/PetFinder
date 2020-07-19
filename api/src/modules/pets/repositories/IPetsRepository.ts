import Pet from '@modules/pets/infra/typeorm/entities/Pet';
import IPetCreateDTO from '@modules/pets/dtos/IPetCreateDTO';
import IPetListAllDTO from '@modules/pets/dtos/IPetListAllDTO';
import { DeleteResult } from 'typeorm';

export default interface IPetsRepository {
  listAllPets(): Promise<IPetListAllDTO[] | undefined>;
  listPetsByCity(city: string): Promise<IPetListAllDTO[] | undefined>;
  findPetById(id: string): Promise<Pet | undefined>;
  create(data: IPetCreateDTO): Promise<Pet>;
  save(pet: Pet): Promise<Pet>;
  delete(id: string): Promise<DeleteResult>;
}
