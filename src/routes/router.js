import { Router } from 'express';
import DealController from '../controllers/DealController';
import DealValidation from '../middlewares/validators/DealValidation';
import CreateQuoteValidation from '../middlewares/validators/CreateQuoteValidation';

const router = Router();
const dealController = new DealController();
const dealValidation = new DealValidation();
const createQuoteValidation = new CreateQuoteValidation();

router.get('/deals', dealController.index);
router.get('/consolidate', dealController.consolidate);

export default router;