import { inject, injectable } from 'tsyringe';

import ICreateScheduleDTO from '../dtos/ICreateScheduleDTO';
import IScheduleRepository from '../repositories/IScheduleRepository';

@injectable()
export default class CreateScheduleService {
  constructor(
    @inject('ScheduleRepository')
    private scheduleRepository: IScheduleRepository,
  ) {}

  public async execute({
    class_id,
    schedules,
  }: ICreateScheduleDTO): Promise<void> {
    await this.scheduleRepository.create({ class_id, schedules });
  }
}
