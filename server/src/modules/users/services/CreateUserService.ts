import { inject, injectable } from 'tsyringe';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    return user;
  }
}
