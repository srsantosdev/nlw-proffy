import IConnectionsRepository from '@modules/connections/repositories/IConnectionsRepository';
import ICreateConnectionDTO from '@modules/connections/dtos/ICreateConnectionDTO';
import db from '@shared/infra/database/connection';

export default class ConnectionsRepository implements IConnectionsRepository {
  public async create({ user_id }: ICreateConnectionDTO): Promise<void> {
    const [connection_id] = await db('connections')
      .insert({
        user_id,
      })
      .returning('id');

    return connection_id;
  }

  public async total(): Promise<number> {
    const [totalConnections] = await db('connections').count('* as total');

    const { total } = totalConnections;

    return Number(total);
  }
}
