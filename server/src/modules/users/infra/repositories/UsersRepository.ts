import db from '@shared/infra/database/connection';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/entities/User';

export default class UsersRepository implements IUsersRepository {
  public async create({
    name,
    avatar,
    bio,
    whatsapp,
  }: ICreateUserDTO): Promise<User> {
    const [user_id] = await db('users')
      .insert({
        name,
        avatar,
        bio,
        whatsapp,
      })
      .returning('id');

    const user = new User({ id: user_id, name, avatar, bio, whatsapp });

    return user;
  }
}
