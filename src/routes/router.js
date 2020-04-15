import { Router } from 'express';
import DealController from '../controllers/DealController';
import DealValidation from '../middlewares/validators/DealValidation';

const router = Router();
const dealController = new DealController();
const dealValidation = new DealValidation();

router.get('/deals', dealController.index);
router.get('/consolidate', dealController.consolidate);

export default router;