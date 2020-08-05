import Schedule from '../entities/Schedule';

export default interface ICreateScheduleDTO {
  class_id: string;
  schedules: Schedule[];
}
