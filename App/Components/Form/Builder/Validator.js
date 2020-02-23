export default class Validator {
  constructor({key, message, validator}) {
    this.key = key;
    this.message = message;
    this.validator = validator;
  }

  validate(value, field, form) {
    const {key, message} = this;
    const validation = this.validator(value, field, form);
    const {validators} = field;
    let valid = validation;
    const isRequiredExists = validators.find(item => item.key === 'REQUIRED');

    if (!isRequiredExists && !value) {
      valid = true;
    }

    return {
      key,
      message,
      valid,
    };
  }
}
