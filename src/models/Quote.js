import Model from './Model';

class Quote extends Model {
	constructor() {
		super('quotes');
	}

  create({ from, to, price }) {
    return super.db.insert({ departure: from, arrival: to, value: price });
  }

  showByDeparture(from) {
  	return super.db.where('departure', from).orderBy('value', 'asc');
  }

  showByArrival(to) {
  	return super.db.where('arrival', to).orderBy('value', 'asc');
  }
}

export default Quote;
