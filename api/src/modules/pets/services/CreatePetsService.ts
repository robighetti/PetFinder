import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Pet from '@modules/pets/infra/typeorm/entities/Pet';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import IPetCreateDTO from '@modules/pets/dtos/IPetCreateDTO';

@injectable()
class CreatePetsService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    race,
    age,
    weight,
    city,
    user_id,
  }: IPetCreateDTO): Promise<Pet> {
    /* check if user exists */
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const pet = await this.petsRepository.create({
      name,
      race,
      age,
      weight,
      city,
      user_id,
    });

    return pet;
  }
}

export default CreatePetsService;
