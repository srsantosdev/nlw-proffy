import ICreateScheduleDTO from '../dtos/ICreateScheduleDTO';

export default interface IScheduleRepository {
  create(data: ICreateScheduleDTO): Promise<void>;
}
