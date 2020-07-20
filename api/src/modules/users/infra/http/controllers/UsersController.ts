import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import SendContactEmailService from '@modules/users/services/SendContactEmailService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, street, number, city, state } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      street,
      number,
      city,
      state,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password, street, number, city, state } = request.body;

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute({
      user_id: request.user.id,
      name,
      email,
      password,
      street,
      number,
      city,
      state,
    });

    return response.json(classToClass(user));
  }

  public async sendEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { petUserName, petEmail } = request.body;

    const sendEmailService = container.resolve(SendContactEmailService);

    await sendEmailService.execute({
      user_id: request.user.id,
      petUserName,
      petEmail,
    });

    return response.json({ ok: true });
  }
}

export default UsersController;
