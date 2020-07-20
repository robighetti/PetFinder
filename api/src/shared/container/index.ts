import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import PetsRepository from '@modules/pets/infra/typeorm/repositories/PetsRepository';

import IMailProvider from './providers/MailProvider/models/IMailProvider';
import EtherealMailProvider from './providers/MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './providers/MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPetsRepository>('PetsRepository', PetsRepository);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
