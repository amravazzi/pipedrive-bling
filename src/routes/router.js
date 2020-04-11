import { Router } from 'express';
import QuoteController from '../controllers/QuoteController';
import QuoteValidation from '../middlewares/validators/QuoteValidation';
import CreateQuoteValidation from '../middlewares/validators/CreateQuoteValidation';

const router = Router();
const quoteController = new QuoteController();
const quoteValidation = new QuoteValidation();
const createQuoteValidation = new CreateQuoteValidation();

router.get('/quote/:from/:to', quoteValidation.validate, quoteController.quote);
router.post('/quote', createQuoteValidation.validate, quoteController.create);

export default router;