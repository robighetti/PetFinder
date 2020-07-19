import { getRepository, Repository, DeleteResult } from 'typeorm';

import Pet from '@modules/pets/infra/typeorm/entities/Pet';

import IPetCreateDTO from '@modules/pets/dtos/IPetCreateDTO';
import IPetListAllDTO from '@modules/pets/dtos/IPetListAllDTO';
import IPetsRepository from '@modules/pets/repositories/IPetsRepository';

class PetsRepository implements IPetsRepository {
  private ormRepository: Repository<Pet>;

  constructor() {
    this.ormRepository = getRepository(Pet);
  }

  public async findPetById(id: string): Promise<Pet | undefined> {
    const pet = await this.ormRepository.findOne(id);

    return pet;
  }

  public async listAllPets(): Promise<IPetListAllDTO[] | undefined> {
    const pets = await this.ormRepository.find();

    return pets;
  }

  public async listPetsByCity(
    city: string,
  ): Promise<IPetListAllDTO[] | undefined> {
    const pets = await this.ormRepository.find({
      //relations: ['users'],
      where: { city },
    });

    console.log(pets);

    return pets;
  }

  public async create({
    name,
    race,
    age,
    weight,
    city,
    user_id,
  }: IPetCreateDTO): Promise<Pet> {
    const pet = this.ormRepository.create({
      name,
      race,
      age,
      weight,
      city,
      user_id,
    });

    await this.ormRepository.save(pet);

    return pet;
  }

  public async save(pet: Pet): Promise<Pet> {
    return this.ormRepository.save(pet);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.ormRepository.delete(id);
  }
}

export default PetsRepository;
