import IScheduleRepository from '@modules/classes/repositories/IScheduleRepository';
import ICreateScheduleDTO from '@modules/classes/dtos/ICreateScheduleDTO';
import db from '@shared/infra/database/connection';
import convertHourToMinutes from '@modules/classes/utils/convertHourToMinutes';

export default class ClassesRepository implements IScheduleRepository {
  public async create({
    class_id,
    schedules,
  }: ICreateScheduleDTO): Promise<void> {
    const classSchedule = schedules.map(schedule => {
      return {
        class_id,
        week_day: schedule.week_day,
        from: convertHourToMinutes(schedule.from),
        to: convertHourToMinutes(schedule.to),
      };
    });

    await db('class_schedule').insert(classSchedule);
  }
}
