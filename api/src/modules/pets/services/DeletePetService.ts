import { injectable, inject } from 'tsyringe';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import AppError from '@shared/errors/AppError';
import { DeleteResult } from 'typeorm';

@injectable()
class DeletePetService {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute(id: string, user_id: string): Promise<DeleteResult> {
    const pet = await this.petsRepository.findPetById(id);

    if (!pet) {
      throw new AppError('Pet not found');
    }

    if (pet.user_id !== user_id) {
      throw new AppError('Operation not permited');
    }

    return this.petsRepository.delete(id);
  }
}

export default DeletePetService;
