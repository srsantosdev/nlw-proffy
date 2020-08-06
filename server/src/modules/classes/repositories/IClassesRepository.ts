import ICreateClassesDTO from '../dtos/ICreateClassesDTO';
import Class from '../entities/Class';

export interface IFilters {
  week_day: number;
  subject: string;
  time: number;
}

export default interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<Class>;
  find(filters: IFilters): Promise<Class[]>;
}
