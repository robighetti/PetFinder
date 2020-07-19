import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Pet from '@modules/pets/infra/typeorm/entities/Pet';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  id: string;
  name: string;
  race: string;
  age: number;
  weight: number;
  city: string;
  user_id: string;
}

@injectable()
class UpdatePetService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    id,
    name,
    race,
    age,
    weight,
    city,
    user_id,
  }: IRequest): Promise<Pet> {
    const pet = await this.petsRepository.findPetById(id);

    if (!pet) {
      throw new AppError('Pet not found');
    }

    const existsUser = await this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new AppError('User not found');
    }

    pet.name = name;
    pet.race = race;
    pet.age = age;
    pet.weight = weight;
    pet.city = city;

    return this.petsRepository.save(pet);
  }
}

export default UpdatePetService;
