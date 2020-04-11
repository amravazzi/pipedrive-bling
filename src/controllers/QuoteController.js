import QuoteModel from '../models/Quote';
import Controller from './Controller';

class QuoteController extends Controller {
	constructor() {
    super(QuoteModel);
  }

	quote(req, res, next) {
    let response = { message: `Hello World from Quotes.quote: from ${req.params.from} to ${req.params.to}` };
    res.status(200).json(response);
	}

	create(req, res) {
		console.log(req.body);
    let response = { message: `Hello World from Quotes.create: ${req.body.from}` };
    res.status(200).json(response);
	}
}

export default QuoteController;