import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import CreateClassService from '@modules/classes/services/CreateClassService';
import CreateScheduleService from '@modules/classes/services/CreateScheduleService';

export default class ClassesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      bio,
      whatsapp,
      avatar,
      cost,
      subject,
      schedules,
    } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const createClassService = container.resolve(CreateClassService);
    const createScheduleService = container.resolve(CreateScheduleService);

    const createdUser = await createUserService.execute({
      name,
      bio,
      whatsapp,
      avatar,
    });

    const createdClass = await createClassService.execute({
      cost,
      subject,
      user_id: createdUser.id,
    });

    await createScheduleService.execute({
      class_id: createdClass.id,
      schedules,
    });

    return response.status(201).json();
  }
}
