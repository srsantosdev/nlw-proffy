import { inject, injectable } from 'tsyringe';

import ICreateConnectionDTO from '../dtos/ICreateConnectionDTO';
import IConnectionsRepository from '../repositories/IConnectionsRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute({ user_id }: ICreateConnectionDTO): Promise<void> {
    return await this.connectionsRepository.create({ user_id });
  }
}
