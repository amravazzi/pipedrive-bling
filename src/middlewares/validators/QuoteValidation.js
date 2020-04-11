import Validator from 'validatorjs';

class QuoteValidation {
  constructor() {}

  validate(req, res, next) {

    const rule = {
      "from": "required|string",
      "to": "required|string"
    }

    let val = new Validator(req.params, rule);

    if(val.fails()) {
      res
      .status(422)
      .send({
        success: false,
        message: 'Validation failed',
        data: val.errors
      });
    }

    next();
  }
}

export default QuoteValidation;
