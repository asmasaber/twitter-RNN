import isArray from 'lodash/isArray';

export default class Types {
  static number(something) {
    if (!something && something !== 0) {
      return '';
    }
    return Number(something);
  }

  static string(something) {
    if (!something) {
      return '';
    }
    return `${something}`;
  }

  static bool(something) {
    return Boolean(something);
  }

  static arrayOfNumbers(something) {
    if (!something || !isArray(something)) {
      return [];
    }

    return something.map(item => Number(item));
  }

  static arrayOfStrings(something) {
    if (!something || !isArray(something)) {
      return [];
    }

    return something.map(item => String(item));
  }
}
