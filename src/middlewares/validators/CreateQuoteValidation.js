import Validator from 'validatorjs';

class CreateQuoteValidation {
  constructor() {}

  validate(req, res, next) {

    const rule = {
      "from": "required|string|min:3",
      "to": "required|string|min:3",
      "price": "required|numeric"
    }

    let val = new Validator(req.body, rule);

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

export default CreateQuoteValidation;
