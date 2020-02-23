import reduce from 'lodash/reduce';
import set from 'lodash/set';

import FieldState from './FieldState';

export default class Schema {
  constructor(formDefinition) {
    const formState = reduce(
      formDefinition,
      (form, options, name) =>
        set(form, name, new FieldState({name, ...options})),
      {},
    );

    return formState;
  }
}
