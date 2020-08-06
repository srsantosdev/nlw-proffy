import { Router } from 'express';

import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import connectionsRouter from '@modules/connections/infra/http/routes/connections.routes';

const appRouter = Router();

appRouter.use('/classes', classesRouter);
appRouter.use('/connections', connectionsRouter);

export default appRouter;
