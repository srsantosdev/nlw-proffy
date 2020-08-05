import { Router } from 'express';
import classesRouter from '@modules/classes/infra/http/routes/classes.routes';

const appRouter = Router();

appRouter.use('/classes', classesRouter);

export default appRouter;
