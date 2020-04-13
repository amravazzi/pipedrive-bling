import Quote from '../models/Quote';
import Controller from './Controller';

class QuoteController extends Controller {
	constructor() {
    super(Quote);
  }

	async quote(req, res, next) {
    const { from, to } = req.params;

    const quote = new Quote();
    const departures = await quote.showByDeparture(from);

    // console.log(departures);

    // for(let dep of departures) {
    //   let { departure, arrival, value } = dep;

    //   let legs = [departure];
    //   let totalValue = 0;

    //   if(currentArrival === to) {
    //     legs.push(currentArrival);
    //     totalValue = value;
    //   }

      // let currentDepature = departure;
      // let currentArrival = arrival;

      // let currentDepature = arrival;


      // let nextArrivals = await quote2.showByDeparture(currentDepature);

      // for(let nxt of nextArrivals) {

      // }

      // console.log(possibleArrivals);
    // }

    let response = { message: `Hello World from Quotes.quote: from ${departures[0].from}` };
    res.status(200).json(response);
	}

  iterateRoutes(routes) {
    const quote = new Quote();
    let nextArrivals = await quote2.showByDeparture(currentDepature);
  }

	async create(req, res) {
		const quote = new Quote();
    const { from, to, price } = req.body;

    let message = {};
    let status = 200;

    try {
      await quote.create({ from, to, price });
      message = {
        success: true,
        message: 'Resource has been saved.'
      };
    } catch(e) {
      status = 500;
      message = {
        success: false,
        message: 'Resource could not be saved.',
        error: e
      };
    }

    res.status(status).send(message);
	}
}

export default QuoteController;
