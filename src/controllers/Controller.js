class Controller {
	constructor(model) {
		this._model = model;
		this.create = this.create.bind(this);
	}

	create(req, res, next) {
		const object = new this._model();
		object.save(req.body);

		res
		.send({
			success: true,
    	message: 'Resource has been saved.'
		});
	}
}

export default Controller;