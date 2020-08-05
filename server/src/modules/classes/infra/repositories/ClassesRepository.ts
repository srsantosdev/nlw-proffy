import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ICreateClassesDTO from '@modules/classes/dtos/ICreateClassesDTO';
import Class from '@modules/classes/entities/Class';
import db from '@shared/infra/database/connection';

export default class ClassesRepository implements IClassesRepository {
  public async create({
    cost,
    subject,
    user_id,
  }: ICreateClassesDTO): Promise<Class> {
    const [class_id] = await db('classes')
      .insert({
        subject,
        cost,
        user_id,
      })
      .returning('id');

    const createdClass = new Class({ subject, cost, id: class_id, user_id });

    return createdClass;
  }
}
