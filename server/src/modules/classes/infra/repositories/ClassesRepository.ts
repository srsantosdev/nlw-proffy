import IClassesRepository, {
  IFilters,
} from '@modules/classes/repositories/IClassesRepository';
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

  public async find(filters: IFilters): Promise<Class[]> {
    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('class_schedule.class_id = classes.id')
          .whereRaw('class_schedule.week_day = ??', [filters.week_day])
          .whereRaw('class_schedule.from <= ??', [filters.time])
          .whereRaw('class_schedule.to > ??', [filters.time]);
      })
      .where('classes.subject', '=', filters.subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return classes;
  }
}
