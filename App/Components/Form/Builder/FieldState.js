export default class FieldState {
  constructor(args) {
    const {validateOn, type, value, ...restOptions} = args;

    return {
      showErrors: false,
      validators: [],
      validateOn: [...(validateOn || []), 'value'],
      errors: [],
      value: type(value),
      type,
      UIOnly: false,
      ...restOptions,
    };
  }
}
