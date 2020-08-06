import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const classesRoutes = Router();
const classesController = new ClassesController();

classesRoutes.get('/', classesController.index);
classesRoutes.post('/', classesController.create);

export default classesRoutes;
