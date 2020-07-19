import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import PetsRepository from '@modules/pets/infra/typeorm/repositories/PetsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPetsRepository>('PetsRepository', PetsRepository);
