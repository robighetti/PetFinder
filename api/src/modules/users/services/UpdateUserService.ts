import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  street: string;
  number: string;
  city: string;
  state: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}
  public async execute({
    user_id,
    name,
    email,
    old_password,
    password,
    street,
    number,
    city,
    state,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not found');
    }

    const userUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userUpdatedEmail && userUpdatedEmail.id !== user_id) {
      throw new AppError('E-mail already in use');
    }

    if (password && !old_password) {
      throw new AppError('Old password need to be informed');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password and new password does not match');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.name = name;
    user.email = email;
    user.street = street;
    user.number = number;
    user.city = city;
    user.state = state;

    return this.usersRepository.save(user);
  }
}

export default UpdateUserService;
