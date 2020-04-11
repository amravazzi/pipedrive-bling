import Quote from '../models/Quote';
import Controller from './Controller';

class QuoteController extends Controller {
	constructor() {
    super(Quote);
  }

	async quote(req, res, next) {
    const q = new Quote();
    const show = await q.show(5);

    let response = { message: `Hello World from Quotes.quote: from ${show[0].departure}` };
    res.status(200).json(response);
	}

	create(req, res) {
		console.log(req.body);
    let response = { message: `Hello World from Quotes.create: ${req.body.from}` };
    res.status(200).json(response);
	}
}

export default QuoteController;