import database from '../config/knexfile';
const knex = require('knex')(database[process.env.NODE_ENV])

class Model {
	constructor(table) {
    // Here we use 'prototype' so the property
    // is available to the children
    Model.prototype.db = knex(table).where('status', 'active');
	}
}

export default Model;
