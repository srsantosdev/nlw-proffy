import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateConnectionService from '@modules/connections/services/CreateConnectionService';
import ShowTotalConnectionsService from '@modules/connections/services/ShowTotalConnectionsService';

export default class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const showTotalConnectionsService = container.resolve(
      ShowTotalConnectionsService,
    );

    const total = await showTotalConnectionsService.execute();

    return response.json({ total });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createConnectionService = container.resolve(CreateConnectionService);

    await createConnectionService.execute({ user_id });

    return response.status(201).json();
  }
}
