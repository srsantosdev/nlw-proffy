import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/repositories/UsersRepository';

import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ClassesRepository from '@modules/classes/infra/repositories/ClassesRepository';

import IScheduleRepository from '@modules/classes/repositories/IScheduleRepository';
import ScheduleRepository from '@modules/classes/infra/repositories/ScheduleRepository';

import IConnectionsRepository from '@modules/connections/repositories/IConnectionsRepository';
import ConnectionsRepository from '@modules/connections/infra/repositories/ConnectionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IScheduleRepository>(
  'ScheduleRepository',
  ScheduleRepository,
);

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionsRepository,
);
