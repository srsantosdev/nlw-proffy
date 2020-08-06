import { inject, injectable } from 'tsyringe';

import IConnectionsRepository from '../repositories/IConnectionsRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute(): Promise<number> {
    const total = await this.connectionsRepository.total();

    return total;
  }
}
