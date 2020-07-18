import User from '../infra/typeorm/entities/User';
import IUserCreateDTO from '../dtos/IUserCreateDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: IUserCreateDTO): Promise<User>;
  save(user: User): Promise<User>;
}
