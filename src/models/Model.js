import db from '../config/database';

class Model {
	constructor() {
    // Here we use 'prototype' so the property
    // is available to the children
    Model.prototype.db = db;
	}
}

export default Model;
