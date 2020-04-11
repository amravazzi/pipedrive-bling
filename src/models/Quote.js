import Model from './Model';

class Quote extends Model {
	constructor() {
		super('quotes');
	}

  show(id) {
    return super.db.where('id', id)
  }
}

export default Quote;