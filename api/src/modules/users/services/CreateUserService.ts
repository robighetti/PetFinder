import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
  street: string;
  number: string;
  city: string;
  state: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    street,
    number,
    city,
    state,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);
    console.log(usersRepository);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      street,
      number,
      city,
      state,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
