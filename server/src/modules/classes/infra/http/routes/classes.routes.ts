import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const classesRoutes = Router();
const classesController = new ClassesController();

classesRoutes.post('/', classesController.create);

export default classesRoutes;
