import { inject, injectable } from 'tsyringe';

import ICreateClassesDTO from '../dtos/ICreateClassesDTO';
import Class from '../entities/Class';
import IClassesRepository from '../repositories/IClassesRepository';

@injectable()
export default class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({
    cost,
    subject,
    user_id,
  }: ICreateClassesDTO): Promise<Class> {
    const createdClass = await this.classesRepository.create({
      cost,
      subject,
      user_id,
    });

    return createdClass;
  }
}
