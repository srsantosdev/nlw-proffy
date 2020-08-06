import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Class from '../entities/Class';
import IClassesRepository from '../repositories/IClassesRepository';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface IRequest {
  filters: {
    week_day?: number;
    subject?: string;
    time?: string;
  };
}

@injectable()
export default class ListClassesService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute({ filters }: IRequest): Promise<Class[]> {
    const { week_day, subject, time } = filters;

    if (!week_day || !subject || !time) {
      throw new AppError('Missing filters to search classes');
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await this.classesRepository.find({
      week_day,
      subject,
      time: timeInMinutes,
    });

    return classes;
  }
}
