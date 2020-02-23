import isNaN from 'lodash/isNaN';

import {Validator} from '~/Components/Form';

export const isRequired = (message = 'Required') =>
  new Validator({
    key: 'REQUIRED',
    message,
    validator: value =>
      value === null || value === undefined || isNaN(value)
        ? false
        : `${value}`.trim().length > 0,
  });

export const minLength = (length, message) =>
  new Validator({
    key: 'MIN_LENGTH',
    message: message || `minLength ${length}`,
    validator: value => `${value}`.length >= length,
  });

export const maxLength = (length, message) =>
  new Validator({
    key: 'MAX_LENGTH',
    message: message || `maxLength ${length}`,
    validator: value => `${value}`.length <= length,
  });

export const exactLength = (length, message) =>
  new Validator({
    key: 'EXACT_LENGTH',
    message: message || `exactLength ${length}`,
    validator: value => `${value}`.length === length,
  });

export const onlyNumbers = (message = 'onlyNumbers') =>
  new Validator({
    key: 'ONLY_NUMBERS',
    message,
    validator: value => /^\d*$/gi.test(`${value}`),
  });

export const matches = (otherValue, message = 'matches') =>
  new Validator({
    key: 'MATCHES',
    message,
    validator: value => value === otherValue(),
  });

export const emailAddress = (message = 'emailAddress') =>
  new Validator({
    key: 'EMAIL',
    message,
    validator: value =>
      /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/gi.test(
        `${value ? value.trim() : ''}`,
      ),
  });

export const isKSAPhoneNumber = (message = 'phoneNumber') =>
  new Validator({
    key: 'PHONE',
    message,
    validator: value =>
      /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/gi.test(
        `${value ? value.trim() : ''}`,
      ),
  });

export const arrayValidators = {
  minLength(length, message) {
    return new Validator({
      key: 'ARRAY_MIN_LENGTH',
      message: message || `minLength ${length}`,
      validator: items => items.length >= length,
    });
  },
};
