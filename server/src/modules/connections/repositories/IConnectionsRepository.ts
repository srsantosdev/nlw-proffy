import ICreateConnectionDTO from '../dtos/ICreateConnectionDTO';

export default interface IConnectionsRepository {
  create(data: ICreateConnectionDTO): Promise<void>;
  total(): Promise<number>;
}
