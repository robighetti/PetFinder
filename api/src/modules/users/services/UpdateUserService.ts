import { getRepository } from 'typeorm';

import AppError from '../../../shared/errors/AppError';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  password: string;
  street: string;
  number: string;
  city: string;
  state: string;
}

class UpdateUserService {
  public async execute({
    user_id,
    name,
    email,
    password,
    street,
    number,
    city,
    state,
  }: IRequest): Promise<void> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('User does not found');
    }

    const userUpdatedEmail = await userRepository.findOne({
      where: { email },
    });

    if (userUpdatedEmail && userUpdatedEmail.id !== user_id) {
      throw new AppError('E-mail already in use');
    }
  }
}

export default UpdateUserService;
