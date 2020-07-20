import { injectable, inject } from 'tsyringe';
import { resolve } from 'path';

import IUsersRepository from '../repositories/IUsersRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  petUserName: string;
  petEmail: string;
}

@injectable()
class SendContactEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({
    user_id,
    petUserName,
    petEmail,
  }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const petContact = resolve(__dirname, '..', 'views', 'pet_contact.hbs');

    await this.mailProvider.sendMail({
      to: {
        name: petUserName,
        email: petEmail,
      },
      subject: '[Pet Finder] Contato para adoção',
      templateData: {
        file: petContact,
        variables: {
          name: petUserName,
          adopter: user.name,
          emailAdopter: user.email,
        },
      },
    });
  }
}

export default SendContactEmailService;
