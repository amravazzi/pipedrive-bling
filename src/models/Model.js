import database from '../config/knexfile';
const knex = require('knex')(database[process.env.NODE_ENV])

class Model {
	constructor(table) {
    Model.prototype.db = knex(table)
	}
}

export default Model;
