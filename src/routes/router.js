import { Router } from 'express';
import QuoteController from '../controllers/QuoteController';

const router = Router();
const quoteController = new QuoteController();

router.get('/quote/:from/:to', quoteController.quote);
router.post('/quote', quoteController.create);

export default router;