import ICreateClassesDTO from '../dtos/ICreateClassesDTO';
import Class from '../entities/Class';

export default interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<Class>;
}
